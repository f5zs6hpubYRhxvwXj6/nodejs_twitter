var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '8iWjhn2IbwWKTUxY1c4hdfYbD',
  consumer_secret: 'BWcpzd2Tozi3I23me9wG5JBHxNe2rR1eQhc4HB8t5OI1mi2fLC',
  access_token_key: '895689498268282880-vKvUZ8UV3j2cmth77gKx2He0Y1f6BEh',
  access_token_secret: 'PxL9SxXVjim9KcU7CAqgSu2NfqWYMADugPJl3wnWZHi71'
});

username = "realdonaldtrump";

client.get('search/tweets', {q: username}, function(error, tweets, response) {
  	console.log(tweets);
});

