export default (content, words) => {
  let reg = new RegExp(words.join("|"),"ig");
  return content.replace(reg, '***');
}