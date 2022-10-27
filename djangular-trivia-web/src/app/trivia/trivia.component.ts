import { Component, OnInit } from '@angular/core';
import { TriviaService } from "../trivia.service";
import { Question,QuestionArray, Answer } from "../trivia";//for developing the actual interface
import { MatRadioChange } from "@angular/material/radio";

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})

export class TriviaComponent implements OnInit {
  //update the button state when an answer is selected
  answerSelected(event: MatRadioChange) {
    this.disableRadioButtons = true;//this property was bound to the html
    this.disableNextButton = false;
  }
  //to track the button's active and disabled states
  disableRadioButtons: boolean = false;
  disableNextButton: boolean = true;

  //correct answers initialised to zero
  questionNumber: number = 0;
  correctAnswers: number = 0;


  constructor(private triviaService: TriviaService) { }
  //actual interface build
  triviaData: QuestionArray = [];
  question: Question|null = null;
  answer: Answer|null = null;

  ngOnInit(): void {
    this.getTrivia();
  }

  getTrivia() {
    this.triviaService.getTrivia().subscribe({
        next: (data) => {
          this.triviaData = data;//output the triviaData array
          this.getNextQuestion();//new method defined below
        },
        error: (error) => {//error logging
          console.log(error);
        }
      }
    )
  }

  getNextQuestion() {
    if (this.triviaData.length) {
      const index = Math.floor(Math.random() * this.triviaData.length);
      this.question = this.triviaData[index];
      this.triviaData.splice(index, 1);
    } else {
      this.question = null;
    }
    //increment the score and correct answer vals as the user answers the questions
    if (this.answer) {
      this.questionNumber++;
      if (this.answer.is_correct) {
        this.correctAnswers++;
      }
    }
    //to reset the button's state when the next question is selected
    this.answer = null;
    this.disableRadioButtons = false;
    this.disableNextButton = true;
  }

  getCorrectAnswer() {
    if (this.question) {
      return this.question.answers.filter(answer => answer.is_correct)[0].answer;
    }
    return '';
  }



}
