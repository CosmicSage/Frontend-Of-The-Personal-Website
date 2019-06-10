import Layout from "../components/MyLayout.js";
import Prism from "prismjs";

const code = `function escapeTxtInCodeTag($txt) {
 $callback = function($matches) {
   return '<code' . $matches[1] . '>' . htmlentities($matches[2], ENT_QUOTES, 'UTF-8') . '</code>';
 };
 $txt = preg_replace_callback('#\<\s*code(.*?)>(.+?)<\s*\/code\s*>#', $callback, $txt);
 return $txt;
}`;
const html = Prism.highlight(code, Prism.languages.javascript, 'javascript');
console.log(html);

export default class Gear extends React.Component {
  componentDidMount() {
    console.log(jQuery(html).text());
  }
  render() {
    return (
      <div className="white">
      <pre>
        <code dangerouslySetInnerHTML={{ __html: html }}></code>
      </pre>
      <p>My Ridiculosy expensive Gear page</p>
      <style jsx>{`.white {background-color : brown}`}</style>
      </div>
    );
  }
}
