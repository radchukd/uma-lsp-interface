const copy = async (data: string) => {
  if (!data?.length) return;

  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(data);
    return;
  }

  await navigator.clipboard.writeText(data);
};

const fallbackCopyTextToClipboard = (data: string) => {
  const textArea = document.createElement("textarea");
  textArea.value = data;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  document.execCommand("copy");

  document.body.removeChild(textArea);
};

export default copy;
