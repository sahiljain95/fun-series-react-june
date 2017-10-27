

var SurveyQuestionsWizard = React.createClass({

  getInitialState: function(){
    return{
      counter : 0,
      questions : ["Do you like fruits","Do you like cars","Do you like travelling","Do you like football"]
    }
  },

  handleNextClick: function(){
    this.setState({counter: this.state.counter + 1});
  },

  handlePreviousClick: function(){
    this.setState({counter: this.state.counter - 1});
  },

  render: function(){

    var counter = this.state.counter,
        questions = this.state.questions,
        disabledLeft = (counter === 0),
        disabledRight = (counter === questions.length);

   
    var endSurvey = this.props.endSurvey,
        displayEndSurvey = (<div><h4>Survey completed</h4><button className = "btn btn-primary" onClick = {endSurvey}>Submit</button></div>);

    var displayContent = (counter === questions.length) ? displayEndSurvey: (<div> <h4> Q) {questions[counter]}? </h4>

              <br/>
              <ul>
                <li>Yes</li>
                <li>No</li>
              </ul> 

            </div>
         );

    return(
        <div className = "container-fluid" id = "question-container">
            <h3> Welcome </h3>
            
            <div id = "question">
              {displayContent}
            </div>
            
            <br/>
            
            <div id = "question-pagination">
              <button className = "btn btn-primary" id = "left-button" disabled = {disabledLeft} onClick = {this.handlePreviousClick}><span className = "glyphicon glyphicon-left"></span>Previous</button>
              <button className = "btn btn-primary" id = "right-button" disabled = {disabledRight} onClick = {this.handleNextClick}><span className = "glyphicon glyphicon-right"></span>Next</button>
            </div>            
        </div>
    );

  }
});

module.exports = SurveyQuestionsWizard;