var SurveyDescription = require('./SurveyDescription');
var SurveyQuestionsWizard = require('./SurveyQuestionsWizard');

var SurveyItem = React.createClass({

   getInitialState: function(){
    return {
      show: false,
      showSurvey: false
    };
  },

  toggleDes: function () {
    console.log('this.state.show:', this.state.show);
    this.setState({ show: !this.state.show });
  },

  toggleSurvey: function(){
    this.setState({ showSurvey: !this.state.showSurvey });
  },

  render: function(){

    const descClass = this.state.show ? "glyphicon glyphicon-chevron-up" : "glyphicon glyphicon-chevron-down";
    const desc = this.state.show ? <SurveyDescription des={this.props.item.description}/> : null;

    const displayLaunchSurvey = this.state.showSurvey ? 
        <SurveyQuestionsWizard endSurvey = {this.toggleSurvey} /> : null;
    
    var surveyTitle = this.state.showSurvey ? "Close Survey": "Launch Survey";
     return (
      <div>
      <br/>
      <div className = "container-fluid" id = "content" >
         <br/>
         <h3> {this.props.item.title} </h3>
        <p>ID: {this.props.item.id}</p>
        
        <p>Date: {this.props.item.creation_date}</p>
        <p onClick={this.toggleDes}> Description <span className = {descClass}></span> </p>
        {desc}
         
         {displayLaunchSurvey}
         <br/>
           <button className = "btn btn-primary" onClick = {this.toggleSurvey}> {surveyTitle} </button>
         <br/> <br/>
         </div>

         <br/>
    </div>
    );
  }
});

module.exports = SurveyItem;
