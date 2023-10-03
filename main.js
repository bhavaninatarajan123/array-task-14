var a=[];
var n=parseInt(prompt("Enter the size of the array"));

	
for (let i=0; i<n; i++){
	a[i]=parseInt(prompt("Enter the" + (i+1) +" value"));
}

document.write("Given Array = "+a+"<br><br>");

var b=[];
var m=parseInt(prompt("Enter the size of the array"));

	
for (let i=0; i<m; i++){
	b[i]=parseInt(prompt("Enter the" + (i+1) +" value"));
}

document.write("Given Array = "+b+"<br><br>");

var c=[];
var temp

for (let i=0; i<a.length;  i++){
	for (let j=i+1; j<a.length; j++){
		if(a[i]>a[j]){
			temp=a[i];
			a[i]=a[j];
			a[j]=temp;
		}
	}
		c.push(a[i]);
		console.log(c);
}

var d=[];
var temp

for (let i=0; i<b.length;  i++){
	for (let j=i+1; j<b.length; j++){
		if(b[i]>b[j]){
			temp=b[i];
			b[i]=b[j];
			b[j]=temp;
		}
	}
		d.push(b[i]);
		console.log(d)
}

var x=[];
var y=[];

y.push(c,d);
console.log(y);
for(i=0;i<y.length;i++){
	for(j=i+1;j<y.length;j++){
		temp=y[i];
		y[i]=y[j];
		y[j]=temp;

	}
	x.push(y[i]);

}
document.write(x);