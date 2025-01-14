export default function clipboard(text: string) {

   navigator.clipboard
      .writeText(text)
      .then(() => {
         console.log("Texto copiado para o clipboard!");
      })
      .catch((err) => {
         console.error("Erro ao copiar texto:", err);
      });

}
