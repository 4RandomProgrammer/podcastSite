import EpisodeController from "../../components/EpisodesControler/EpisodeController";


const Episodes = () => {
    return (
        <section>
             <h1>Confira todos os episódios</h1>
            <EpisodeController numberOfEpisodes={34} Episodekey={'Episodes'}/>
        </section>
           
    )
}

export default Episodes;