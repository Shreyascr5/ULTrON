function submit() {
    const inputText = document.getElementById('input').value.toLowerCase().replace(/[^a-z0-9]+/g, '');
    const reversedText = inputText.split('').reverse().join('');
    const isPalindrome = inputText === reversedText;
    document.getElementById('output').value = isPalindrome;
}