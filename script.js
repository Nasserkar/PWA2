const textarea = document.getElementById("information");
const fileName = document.getElementById("ext");
const saveBtn = document.getElementById("save");
const fileInput = document.getElementById("fileInput");



let g,
  b = true;
saveBtn.onclick = save;
fileInput.onclick = handlefile;

function fileFormats(e) {
  let pattern = /\.([a-zA-Z0-9]+)$/
  let match = e.match(pattern)
  switch (match[1]) {
      case "txt":
          b = true
          return `text/plain`
          break;
      case "html":
          b = true
          return `text/html`
          break;
      case "svg":
          b = true
          return `image/svg+xml`
          break;
      case "js":
          b = true
          return `text/javascript`
          break;
      case "php":
          b = true
          return `application/x-httpd-php`
          break;
      case "json":
          b = true
          return `application/json`
          break;
      case "xml":
          b = true
          return `application/xml`
          break;
      case "ppt":
          b = true
          return `application/vnd.ms-powerpoint`
          break;
      case "csv":
          b = true
          return `text/csv`
          break;
      case "css":
          b = true
          return `text/css`
          break;
      case "doc":
          b = true
          return `application/msword`
          break;
      case "rtf":
          b = true
          return `application/rtf`
          break;
      case "xhtml":
          b = true
          return `application/xhtml+xml`
          break;
      case "py":
          b = true
          return "text/x-python";
          break;
      case "java":
          b = true
          return "text/x-java";
          break;
      case "c":
          b = true
          return "text/x-c";
          break;
      case "cpp":
          b = true
          return "text/x-c++src";
          break;
      case "rb":
          b = true
          return "application/x-ruby";
          break;
      case "cs":
          b = true
          return "text/x-csharp";
          break;
      case "swift":
          b = true
          return "text/x-swift";
          break;
      case "go":
          b = true
          return "text/x-go";
          break;
      case "rust":
          b = true
          return "text/x-rustsrc";
          break;
      case "perl":
          b = true
          return "application/x-perl";
          break;
      case "lua":
          b = true
          return "text/x-lua";
          break;
      case "r":
          b = true
          return "text/x-rsrc";
          break;
      case "sql":
          b = true
          return "application/sql";
          break;
      default:
          alert("File extinsion not supported !")
          b = false
          break;
  }
}
function check(e) {
  const fileExtension = e.match(/\.(\w+)$/);
  if (fileExtension) {
    return e;
  } else if (!fileExtension && e != "") {
    g = `${e}.txt`;
    return g;
  } else if (e == " " || e == "") {
    g = "index.txt";
    return g;
  } else {
    return 0;
  }
}
function save(e) {
  const blob = new Blob([textarea.value], {
    type: fileFormats(check(fileName.value)),
  });
  const fileUrl = URL.createObjectURL(blob);
  if (b == false) {
    return 0;
  } else {
    const a = document.createElement("a");
    a.download = check(fileName.value);
    a.href = fileUrl;
    a.click();
  }
}

function handlefile() {
  fileInput.addEventListener("change", (e) => {
    const sFile = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const text = reader.result;
      textarea.value = text;
      fileName.value = sFile.name;
    };
    reader.readAsText(sFile);
  });
}
