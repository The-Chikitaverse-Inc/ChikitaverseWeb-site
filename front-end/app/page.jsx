import MainPage from "@/components/layout/MainPage/MainPage";
import ChikitaGif from "@/components/ux/ChikitaGif/ChikitaGif";

export default function Home() {
  return (
    <>
      <MainPage title='Home'>
        <p>Bem vindo ao Chikitaverso, O multiverso das Chikitas.</p>
          <ChikitaGif/>
      </MainPage>
    </>
  );
}
