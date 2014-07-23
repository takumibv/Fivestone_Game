	var el=9;
	var i=1,j,k;
	var row0 = new Array();
	var row1 = new Array();
	var row2 = new Array();
	var row3 = new Array();
	var row4 = new Array();
	var row5 = new Array();
	var row6 = new Array();
	var row7 = new Array();
	var row8 = new Array();
	var row9 = new Array();
	var row10 = new Array();
	var row11 = new Array();
	var row12 = new Array();
	var row13 = new Array();
	var row14 = new Array();
	var row15 = new Array();
	var row16 = new Array();
	var row17 = new Array();
	var row18 = new Array();
	var row19 = new Array();
	var row20 = new Array();

	var array =[row0,row1,row2,row3,row4,row5,row6,row7,row8,row9,row10
				,row11,row12,row13,row14,row15,row16,row17,row18,row19,row20];


	for(j=0;j<el+2;j++){
		for(k=0;k<el+2;k++){
			array[j][k]=0; //j:行　k:列
		}
	}

	function stone(i,str){
		if(i%2==1){
			array[str.substr(0,1)-0][str.substr(2,1)-0]=1;
			//alert("["+((str.substr(0,1)-0)+(str.substr(2,1)-0))+"]="+array[str.substr(0,1)][str.substr(2,1)]);
			return '<img src="ex07.png">';
		}else{
			array[str.substr(0,1)-0][str.substr(2,1)-0]=2;
			return '<img src="ex09.png">';
		}
	}

	function end(i){
		if(i%2==0){
			alert("黒の勝ち！");
		}else{
			alert("白の勝ち！");
		}
	}

	function hantei(i,j,k){ //5目並んだかの評価
		var n,m=0;
		//縦判定
		for(n=1;n<5;n++){
			if(array[j][k]!=array[j+n][k]){
				for(m=0;m<5;m++){
					if(array[j][k]!=array[j+n-m-1][k]){
						break;
					}
				}
				break;
			}
		}
		if(m==5||n==5){
			end(i);
			return;
		}
		//横判定
		for(n=1;n<5;n++){
			if(array[j][k]!=array[j][k+n]){
				for(m=0;m<5;m++){
					if(array[j][k]!=array[j][k+n-m-1]){
						break;
					}
				}
				break;
			}
		}
		if(m==5||n==5){
			end(i);
			return;
		}
		//斜め判定１
		for(n=1;n<5;n++){
			if(array[j][k]!=array[j+n][k+n]){
				for(m=0;m<5;m++){
					if(array[j][k]!=array[j+n-m-1][k+n-m-1]){
						break;
					}
				}
				break;
			}
		}
		if(m==5||n==5){
			end(i);
			return;
		}
		//斜め判定２
		for(n=1;n<5;n++){
			if(array[j][k]!=array[j-n][k+n]){
				for(m=0;m<5;m++){
					if(array[j][k]!=array[j-n+m+1][k+n-m-1]){
						break;
					}
				}
				break;
			}
		}
		if(m==5||n==5){ 
			end(i);
			return;
		}
		return;
	}
	
	function rewrite(str){
		if(document.getElementById(str).innerHTML=='<img src="ex06.png">'){
			document.getElementById(str).innerHTML=stone(i,str);
			i++;
			document.getElementById("tesuu").textContent="＜"+i+"手目＞";
			hantei(i,str.substr(0,1)-0,str.substr(2,1)-0);
		}else{
			alert("既に置かれている。"+document.getElementById(str).innerHTML);
		}
	}

	function reset(){
		var j,k;
		i=1;
		document.getElementById("tesuu").textContent="＜"+i+"手目＞";
		for(j=0;j<el+2;j++){
			for(k=0;k<el+2;k++){
				if(document.getElementById(j+"-"+k)){
					document.getElementById(j+"-"+k).innerHTML="<img src='ex06.png'>";
				}
				array[j][k]=0; //j:行　k:列
			}
		}
	}

	function undo(){

	}
