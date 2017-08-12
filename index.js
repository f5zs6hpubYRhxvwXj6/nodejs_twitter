// JavaScript source code
$("#get_tweets").click(function () {
    var twitter_handle = $("#twitter_handle").val();
    get_tweets(twitter_handle,  function(tweets) {
        console.log(tweets);
    });
    
    
});