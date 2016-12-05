exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
  	var timeout;
  	function count_it(){
  		console.log(start++);

  		if (start <= end) {
  			timeout = setTimeout(count_it, 100);
  		}
  	}

  	count_it();

  	return {
  		cancel: function () {
  			timeout && clearTimeout(timeout);
  		}
  	}
  }
};
