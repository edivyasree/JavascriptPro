
	function reverse(str,a,b)
	{
				let temp;
		
		
		while (a <= b)
		{
			temp = str[a];
			str[a]=str[b];
			str[b]=temp;
			a++;
			b--;
		}
	}

	function reverseWords(s)
	{

		s=s.split("");
		let a = 0;
		for (let b = 0; b < s.length; b++)
		{
			
			if (s[b] == ' ')
			{
				reverse(s, a, b);
				a = b + 1;
			}
		}
		reverse(s, a, s.length - 1);
		reverse(s, 0, s.length - 1);
		return s.join("");
	}
	// var s = " a good example ";
    // var s = " the sky is blue ";
    var s="hello   world! "
console.log(reverseWords(s));
	

