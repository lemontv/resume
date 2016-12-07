var resume = new Vue({
    el: '#wrap',
    data: {}
});

jQuery.ajax({
    url: 'data.json'
}).then(function(json) {
    resume.$data = json;
});
