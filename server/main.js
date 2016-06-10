/**
 * Created by 5304-20 on 2016-06-10.
 */
Meteor.methods({
    getVideoList: function(topic){
        console.log('Topic: '+topic);
        var url = 'https://apis.daum.net/search/vclip?apikey=cf3bca367940ee0cfd368998ee1196b8=json&q='+topic;
        var result = HTTP.get(url).data;
        return result;
    }
});