Meteor.publish('SuggestionBoxes', function() {
  // Counts.publish(this, 'votesCount', Votes.find());
  return SuggestionBoxes.find(); 
});