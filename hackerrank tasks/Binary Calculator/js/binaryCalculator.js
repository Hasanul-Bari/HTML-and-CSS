var res=document.getElementById("res");


var btn0=document.getElementById("btn0");
var btn1=document.getElementById("btn1");
var btnClr=document.getElementById("btnClr");
var btnEql=document.getElementById("btnEql");
var btnSum=document.getElementById("btnSum");
var btnSub=document.getElementById("btnSub");
var btnMul=document.getElementById("btnMul");
var btnDiv=document.getElementById("btnDiv");

var op="hp",oprand1="",oprand2="";



btn0.onclick=function(){

	
	res.textContent=res.textContent+btn0.textContent;

	if(op==='+' || op==='-' || op==='*' || op==='/'){
		oprand2=oprand2+btn0.textContent;
	}
	else{
		oprand1=oprand1+btn0.textContent;
	}
};


btn1.onclick=function(){



	res.textContent=res.textContent+btn1.textContent;

	if(op==='+' || op==='-' || op==='*' || op==='/'){
		oprand2=oprand2+btn1.textContent;
	}
	else{
		oprand1=oprand1+btn1.textContent;
	}
};

btnClr.onclick=function(){
	res.textContent="";
	oprand1="";
	oprand2="";
	op="hp";
};

btnEql.onclick=function(){

	//console.log(oprand1);

	var q=parseInt(oprand2,2);
	var p=parseInt(oprand1,2);

	//console.log(p);
	//console.log(q);
	//console.log(op);

	var x;

	if(op==="+"){
		x=p+q;
	}
	else if(op==="-"){
		x=p-q;
	}
	else if(op==="*"){
		x=p*q;
	}
	else if(op==="/"){
		x=p/q;
	}

	//console.log(x);

	res.textContent=x.toString(2);
	oprand1=x.toString(2);
	op="hp";

	//console.log(oprand1);


};

btnSum.onclick=function(){

	res.textContent=res.textContent+btnSum.textContent;
	op="+";
	oprand2="";

	//console.log(oprand1);

};

btnSub.onclick=function(){

	res.textContent=res.textContent+btnSub.textContent;
	op="-";
	oprand2="";
	
};

btnMul.onclick=function(){

	res.textContent=res.textContent+btnMul.textContent;
	op="*";
	oprand2="";
	
};

btnDiv.onclick=function(){

	res.textContent=res.textContent+btnDiv.textContent;
	op="/";
	oprand2="";

};





