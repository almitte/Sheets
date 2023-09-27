class Navbar extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<nav>
        <div class="left"><a class="logo" href="../index.html">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/1200px-McDonald%27s_Golden_Arches.svg.png"
                    alt="McDonald's logo"></a>
            <h2 id="text-long">McDonald's Rollout Monitor</h2>
            <h2 id="text-short">McD Rollout Monitor</h2>
        </div>
        <div class="right">
            <div class="dropdown" id="combined-dropdown">
                <button class="dropbtn"><i class="fa fa-bars"></i>
                </button>
                <div class="dropdown-content">
                    <h3>NSO/IRLX</h3>
                    <a href="../rolloutmonitor.html">Home</a>
                    <a href="../rolloutmonitor/forecast.html">Forecast</a>
                    <a href="../rolloutmonitor/detail.html">Detailplanung</a>
                    <a href="../rolloutmonitor/installation.html">Rollout Status</a>
                    <hr>
                    <a href="../archiv/archiv_2022.html">Archiv 2022</a>
                    <a href="../archiv/archiv_2023.html">Archiv 2023</a>
                    <a href="../archiv/archiv_2024.html">Archiv 2024</a>
                    <hr>
                    <a href="../dashboards/rollout_planung_2023.html">Rollout Planung 2023</a>
                    <a href="../dashboards/rollout_planung_2024.html">Rollout Planung 2024</a>
                    <hr>
                    <a href="../dashboards/servermigration_2023_r350.html">Servermigration 2023 R350</a>
                    <a href="../dashboards/servermigration_2024_r350.html">Servermigration 2024 R350</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">NSO/IRLX
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="../rolloutmonitor.html">Home</a>
                    <a href="../rolloutmonitor/forecast.html">Forecast</a>
                    <a href="../rolloutmonitor/detail.html">Detailplanung</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">Rollout Planung
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="../dashboards.html">Home</a>
                    <a href="../dashboards/gesamtplanung_2024.html">Gesamtplanung 2024</a>
                    <hr>
                    <a href="../dashboards/rollout_planung_2023.html">Rollout Planung 2023</a>
                    <a href="../dashboards/rollout_planung_2024.html">Rollout Planung 2024</a>
                    <hr>
                    <a href="../dashboards/servermigration_2023_r350.html">Servermigration 2023 R350</a>
                    <a href="../dashboards/servermigration_2024_r350.html">Servermigration 2024 R350</a>
                </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn">Archiv
                  <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                  <a href="../archiv.html">Home</a>
                  <a href="../archiv/archiv_2022.html">Archiv 2022</a>
                  <a href="../archiv/archiv_2023.html">Archiv 2023</a>
                  <a href="../archiv/archiv_2024.html">Archiv 2024</a>
                  <hr>
                  <a href="../dashboards/rollout_planung_2022.html">Rollout Planung 2022</a>
              </div>
            </div>
        </div>
    </nav>`
    }
}

customElements.define('app-nav', Navbar);