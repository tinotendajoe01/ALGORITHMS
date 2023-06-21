import React, { useCallback, useRef } from "react";
import { jsPDF } from "jspdf";
import { toPng } from "html-to-image";
import dynamic from "next/dynamic";

type Props = {
  html?: React.MutableRefObject<HTMLDivElement>;
};

const GeneratePdf: React.FC<Props> = React.memo(({ html }) => {
  const docRef = useRef(new jsPDF());

  const generatePdf = useCallback(() => {
    const doc = docRef.current;

    let split = doc.splitTextToSize(
      document.getElementById("text").innerText,
      200
    );
    let image = document.getElementById("image").getAttribute("src");

    doc.text(document.querySelector(".content > h1").innerHTML, 75, 5);
    doc.addImage(image, 70, 7, 60, 60);
    doc.text(split, 5, 75);
    doc.output("dataurlnewwindow");
  }, []);

  const generateImage = useCallback(async () => {
    const image = await toPng(html.current, { quality: 0.95 });

    const doc = docRef.current;
    doc.addImage(image, "JPEG", 5, 22, 200, 160);
    doc.save();
  }, [html]);

  return (
    <div className=" mt-40 flex z-50">
      <button onClick={generateImage}>Download</button>
      <button>Get in MAIL</button>
    </div>
  );
});

export default dynamic(() => Promise.resolve(GeneratePdf), { ssr: false });
