<script src="Jquery.js"></script>
<script>
$(document).ready(function(){
var nav,content,fetchAndInsertNow;
fetchAndInsertNow=function(href){
$.ajax({url:''+href,method:"GET",cache:false,success:function(data){
content.html(data);
}
});
};
//user go and back
$(window).on('popstate',function(){
console.log(location.pathname);
//fetchAndInsert(location.pathname);
});
nav=$('nav#main');
content=$('section#content');
nav.find('a').on('click',function(e){
e.preventDefault();
var href=$(this).attr('href');
//mainpulate history
history.pushState(null,null,href);
//fetch and insert content
fetchAndInsert(href);
});
});
</script>
</body>
</html>