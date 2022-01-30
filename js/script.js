/* ↓↓↓↓↓↓↓↓↓↓↓↓↓↓  JavaScript ↓↓↓↓↓↓↓↓↓↓↓↓↓↓ 


■命令したいHTMLタグを指定する
$('●●●')


■クリックイベントの設定
$('●●●').on('click', function(){


});

■代表的なjQueryの命令
show(), hide(), fadeOut(), append()

■変数
const ●●●　= ●●●;
let ●●●　= ●●●;

■if文
if(){

}else if(){


}else{


}

*/



// ゲームスタート
$('#game').hide();


let jankenStatus;


// ゲーム開始
$('#start').on('click', function () {
    $('#start').hide();
    $('#game').show();
    $('.message').hide();
// タイマー
$(function(){
	$('.timer').startTimer();
    // $('.message').show(1000);
});


    const randomRate = Math.ceil(Math.random() * 3);
    console.log(randomRate);
    if (randomRate === 1) {
        // グー
        const result = '<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17390-300x300.jpg" alt=""></img>'
        $('#result').html(result);
        jankenStatus = randomRate;
        console.log(jankenStatus)

    }

    else if (randomRate === 2) {
        // チョキ
        const result = '<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17430-300x300.jpg" alt=""></img>'
        $('#result').html(result);
        jankenStatus = randomRate;
        console.log(jankenStatus)
    }

    else {
        // パー
        const result = '<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17431-300x300.jpg" alt=""></img>'
        $('#result').html(result);
        jankenStatus = randomRate;
        console.log(jankenStatus)


    }
});




// playerがグーを出した時

$('#btn1').on('click', function () {
    if (jankenStatus === 1) {
        $('#work').html('あいこ');
        $('#comment').html('中途半端ですね')
        $("#work").css("color", "black");
        $("#comment").css("color", "black");
    }

    else if (jankenStatus === 2) {
        $('#work').html('勝ち');
        $('#comment').html('大人げないですね');
        $("#work").css("color", "black");
        $("#comment").css("color", "black");
    }

    else {
        $('#work').html('負け');
        $("#work").css("color", "red");
        $('#comment').html('コングラッツ')
        $("#comment").css("color", "red");
    }

    const randomRate = Math.ceil(Math.random() * 3);
    console.log(randomRate);
    if (randomRate === 1) {
        const result = '<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17390-300x300.jpg" alt=""></img>'
        $('#result').html(result);
        jankenStatus = randomRate;
        console.log(jankenStatus)
    }

    else if (randomRate === 2) {

        const result = '<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17430-300x300.jpg" alt=""></img>'
        $('#result').html(result);
        jankenStatus = randomRate;
        console.log(jankenStatus)
    }

    else {
        const result = '<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17431-300x300.jpg" alt=""></img>'
        $('#result').html(result);

        jankenStatus = randomRate;
        console.log(jankenStatus)
    }



});


// playerがチョキを出した時
$('#btn2').on('click', function () {
    if (jankenStatus === 1) {
        $('#work').html('負け');
        $("#work").css("color", "red");
        $('#comment').html('コングラッツ')
        $("#comment").css("color", "red");
    }
    else if (jankenStatus === 2) {
        $('#work').html('あいこ');
        $('#comment').html('中途半端ですね');
        $("#work").css("color", "black");
        $("#comment").css("color", "black");
    }
    else {
        $('#work').html('勝ち');
        $('#comment').html('大人げないですね')
        $("#work").css("color", "black");
        $("#comment").css("color", "black");
    }

    const randomRate = Math.ceil(Math.random() * 3);
    console.log(randomRate);
    if (randomRate === 1) {
        const result = '<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17390-300x300.jpg" alt=""></img>'
        $('#result').html(result);
        jankenStatus = randomRate;
        console.log(jankenStatus)

    }

    else if (randomRate === 2) {

        const result = '<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17430-300x300.jpg" alt=""></img>'
        $('#result').html(result);
        jankenStatus = randomRate;
        console.log(jankenStatus)

    }

    else {
        const result = '<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17431-300x300.jpg" alt=""></img>'
        $('#result').html(result);

        jankenStatus = randomRate;
        console.log(jankenStatus)
    }



});


// playerがパーを出した時
$('#btn3').on('click', function () {
    if (jankenStatus === 1) {
        $('#work').html('勝ち');
        $('#comment').html('大人げないですね')
        $("#work").css("color", "black");
        $("#comment").css("color", "black");
    }
    else if (jankenStatus === 2) {
        $('#work').html('負け');
        $("#work").css("color", "red");
        $('#comment').html('コングラッツ');
        $("#comment").css("color", "red");
    }
    else {
        $('#work').html('あいこ');
        $('#comment').html('中途半端ですね')
        $("#work").css("color", "black");
        $("#comment").css("color", "black");
    }

    const randomRate = Math.ceil(Math.random() * 3);
    console.log(randomRate);
    if (randomRate === 1) {
        const result = '<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17390-300x300.jpg" alt=""></img>'
        $('#result').html(result);
        jankenStatus = randomRate;
        console.log(jankenStatus)

    }

    else if (randomRate === 2) {

        const result = '<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17430-300x300.jpg" alt=""></img>'
        $('#result').html(result);
        jankenStatus = randomRate;
        console.log(jankenStatus)

    }

    else {
        const result = '<img src="https://www.silhouette-illust.com/wp-content/uploads/2016/11/17431-300x300.jpg" alt=""></img>'
        $('#result').html(result);

        jankenStatus = randomRate;
        console.log(jankenStatus)
    }



});