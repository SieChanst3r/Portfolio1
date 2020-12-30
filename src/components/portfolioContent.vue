<template>
    <div id="portfolio-view">
        <h2> ~/ PROJECTS </h2>
    <div id="projects">
        <div class="project-item">
            <h3> Okotoks Pizza </h3>
            <img src="@/assets/OPP.png" height="175px" alt="Screenshot of project for Okotoks Pizza ">
            <h2> Okotoks Pizza Project: Local Pizza restaurant.</h2>
            <p>This project was made as one of the first projects in Innotech College for the unit HTML and CSS/SASS.</p>
            <div id="links">
                <p class="link">
                    <a href="#"> WEBSITE </a>
                </p>
            </div>
        </div>
                <div class="project-item">
            <h3> Tweeter: 'QUEERTR' </h3>
            <img src="@/assets/Queertr1.png" height="175px" alt="Screenshot of project for Tweeter ">
            <h2> QUEERTR: A project made as my own twist to tweeter.</h2>
            <p> Tweeter Project: This project was made during the python and backend unit in Innotech College.</p>
            <div id="links">
                <p class="link">
                    <a href="#"> WEBSITE </a>
                </p>
            </div>
        </div>
            <div class="project-item">
            <h3> Pokemon Battle </h3>
            <img src="@/assets/pokemon.png" height="150px" alt="Screenshot of project for Tweeter ">
            <h2> Interactive Pokemon battle: An assignment using basic JS skills.</h2>
            <p> Pokemon battle: This assignment was made during the introduction unit of JS in Innotech College.</p>
            <div id="links">
                <p class="link">
                    <a href="#"> WEBSITE </a>
                </p>
            </div>
        </div>

    </div>
    

    </div>
</template>

<script>
    export default {
        name: "portfolio",

    }
</script>

<style scoped>
#projects {
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    min-height: 80vh;
    /* width: 90%;
    margin-left: 5%; */
}
.project-item {
    display: grid;
    align-items: center;
    justify-items: center;
    border: 2px black solid;
    margin: 8px;
    width: 90%;
    margin-left: 5%;
}
</style>