Session.setDefault('topic');

Template.body.events({
  'click #search': function(event){
    var topic = $('#topic').val();
    Session.set('topic', topic);
    Meteor.call('getVideoList', topic, function (err, result) {
      console.log('result:'+result )
    });
  }
});

Template.body.helpers({
  'topic': function(){
    var topic = Session.get('topic');
    return topic;
  }
});