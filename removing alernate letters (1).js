
// Javascript program to remove all the characters
// other then alphabets
	
	// function to remove characters and
	// print new string
function removeSpecialCharacter(s)
{
	for (let i = 0; i < s.length; i++)
		{

			// Finding the character whose
			// ASCII value fall under this
			// range
			if (s[i] < 'A' || s[i] > 'Z' &&
					s[i] < 'a' || s[i] > 'z')
			{
				
				// erase function to erase
				// the character
				s = s.substring(0, i) + s.substring(i + 1);
				i--;
			}
		}
		document.write(s);
}
	
// Driver code
let s = "$Gee*k;s..fo, r'Ge^eks?";
removeSpecialCharacter(s);
	
	

// This code is contributed by unknown2108


