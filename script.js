let slideIndex = 0;

function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(categoryName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.style.display = 'flex';
        } else {
            slide.style.display = 'none';
        }
    });
}

function changeSlide(n) {
    slideIndex += n;
    showSlides();
}

function loadPage(page) {
    let content = document.getElementById('content');
    switch(page) {
        case 'ich':
            content.innerHTML = `
                <div class="content inner">
                    <div class="info">
                        <h2>Über mich</h2>
                        <p>Grüezi! Mein Name ist Filip Kritzner. Ich bin in der zweiten Klasse der Informatikmittelschule Baden und suche zurzeit ein Praktikum für mein viertes Ausbildungsjahr August 2025.</p>
                        <p>Nutzen Sie das Menü, um zwischen den verschiedenen Seiten zu navigieren.</p>
                        <p>Herzlichen Dank, dass Sie sich die Zeit genommen haben, meine Webseite zu besuchen!</p>
                        <p></p>
                    </div>
                </div>
                <div class="content inner">
                    <h2>Schulische Ausbildung</h2>
                    <div class="zeitstrahl">
                        <div class="container-zeitstrahl left">
                            <div class="content-zeitstrahl">
                                <h3>IMS</h3>
                                <p>2022 - zurzeit</p>
                                <p>Informatikmittelschule Baden</p>
                            </div>
                        </div>
                        <div class="container-zeitstrahl right">
                            <div class="content-zeitstrahl">
                                <h3>Bezirksschule</h3>
                                <p>2019 - 2022</p>
                                <p>Bezirksschule Leuggern</p>
                            </div>
                        </div>
                        <div class="container-zeitstrahl left">
                            <div class="content-zeitstrahl">
                                <h3>Primarschule</h3>
                                <p>2013 - 2019</p>
                                <p>Primarschule Full</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content inner">
                    <h2>Meine Skills</h2>
                    <div class="skills-tabs">
                        <div class="tab">
                            <button class="tablinks active" onclick="openCategory(event, 'programming')">Programmierung</button>
                            <button class="tablinks" onclick="openCategory(event, 'design')">Design</button>
                            <button class="tablinks" onclick="openCategory(event, 'languages')">Sprachen</button>
                        </div>

                        <div id="programming" class="tabcontent active">
                            <h2>Programmierung</h2>
                            <div class="skill-box">
                                <span><h3>C#</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-box">
                                <span><h3>C</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                        <div class="box"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-box">
                                <span><h3>Python</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-box">
                                <span><h3>HTML</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                        <div class="box"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-box">
                                <span><h3>CSS</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                        <div class="box"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-box">
                                <span><h3>Javascript</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-box">
                                <span><h3>SQL</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                        <div class="box"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="design" class="tabcontent">
                            <h2>Projektmanagement und Systeme</h2>
                            <div class="skill-box">
                                <span><h3>IPERKA</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-box">
                                <span><h3>Scrum</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-box">
                                <span><h3>Docker</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                        <div class="box"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-box">
                                <span><h3>AWS</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="languages" class="tabcontent">
                            <h2>Sprachen</h2>
                            <div class="skill-box">
                                <span><h3>Tschechisch</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-box">
                                <span><h3>Deutsch</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-box">
                                <span><h3>Englisch</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box filled"></div>
                                        <div class="box"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="skill-box">
                                <span><h3>Französisch</h3></span>
                                <div class="skill-box">
                                    <div class="boxes">
                                        <div class="box filled"></div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--
                <div class="content inner">
                    <h2>Portfolios</h2>
                    <div class="portfolio-slider">
                        <div class="slides">
                            <div class="slide">
                                <img src="page-0.png" alt="Portfolio 1">
                                <div class="slide-content">
                                    <h3>Portfolio 1</h3>
                                    <p>Beschreibung des Portfolios 1.</p>
                                </div>
                            </div>
                            <div class="slide">
                                <img src="page-1.png" alt="Portfolio 2">
                                <div class="slide-content">
                                    <h3>Portfolio 2</h3>
                                    <p>Beschreibung des Portfolios 2.</p>
                                </div>
                            </div>
                            <div class="slide">
                                <img src="page-2.png" alt="Portfolio 3">
                                <div class="slide-content">
                                    <h3>Portfolio 3</h3>
                                    <p>Beschreibung des Portfolios 3.</p>
                                </div>
                            </div>
                        </div>
                        <button class="prev-slide" onclick="changeSlide(-1)">&#10094;</button>
                        <button class="next-slide" onclick="changeSlide(1)">&#10095;</button>
                    </div>
                    -->
                </div>
                <div class="content inner">
                    <h2>Portfolios mit Direktzugriff</h2>
                    <p>Alle Projekte mit Direktzugriff:</p>
                    <div class="portfolio-liste">
                        <ul>
                            <li><a href="https://portfolio.bbbaden.ch/user/f-kritzner-inf22/text-und-bilder-mit-c-verschl-sseln-und-entschl-sseln-1">Text und Bilder mit C# verschlüsseln und entschlüsseln</a></li>
                            <li><a href="https://portfolio.bbbaden.ch/user/f-kritzner-inf22/vertiefung-c-und-einstieg-oop-1">Vertiefung in C# und Einstieg</a></li>
                            <li><a href="https://portfolio.bbbaden.ch/user/f-kritzner-inf22/instagram-bot-mit-python">Instagram Bot mit Python</a></li>
                            <li><a href="https://portfolio.bbbaden.ch/user/f-kritzner-inf22/javascript-gaming-webseite">JavaScript Gaming-Webseite</a></li>
                            <li><a href="https://portfolio.bbbaden.ch/user/f-kritzner-inf22/data-definition-language-ddl">Data Definition Language (DDL)</a></li>
                            <li><a href="https://portfolio.bbbaden.ch/user/f-kritzner-inf22/trycatch-modul319">TryCatch Modul 319</a></li>
                        </ul>
                    </div>
                </div>
                <div class="content inner hobbys-pc">
                    <h2>Meine Hobbys</h2>
                    <div class="image-box">
                        <img src="Zontes.jpg" alt="Mein Motorrad" class="image-text image-small">
                        <div class="text-overlay">
                            <h1>Freizeitaktivitäten</h1>
                            <h3>In meiner Freizeit halte ich mich gerne körperlich fit, sei es im Fitnesszentrum oder auf meinem Motorrad (Zontes ZT 125). Früher war ich auch aktiv im Boxclub. Diese Aktivitäten helfen mir nicht nur, einen Ausgleich zum Schulalltag zu finden, sondern fördern auch meine Disziplin und Belastbarkeit – Qualitäten, die ich auch in mein Arbeitsumfeld einbringe.</h3>
                        </div>
                    </div>
                </div>
                <div class="content inner hobbys-mobile">
                    <h2>Meine Hobbys</h2>
                    <p>In meiner Freizeit halte ich mich gerne körperlich fit, sei es im Fitnesszentrum oder auf meinem Motorrad (Zontes ZT 125). Früher war ich auch aktiv im Boxclub. Diese Aktivitäten helfen mir nicht nur, einen Ausgleich zum Schulalltag zu finden, sondern fördern auch meine Disziplin und Belastbarkeit – Qualitäten, die ich auch in mein Arbeitsumfeld einbringe.</p>
                    <div class="image-box centered">
                        <img src="Zontes.jpg" alt="Mein Motorrad" class="zertifikat">
                    </div>
                </div>`;
            break;
        case 'zertifikate':
            content.innerHTML = `
                <div class="content inner">
                    <h2>Zertifikate und Zeugnisse</h2>
                    <div class="image-box centered">
                        <img src="BBB_Zeugnis.png" alt="Zertifikat 1" class="zertifikat">
                    </div>
                    <div class="image-box centered">
                        <img src="Kanti_Zeugnis_4.png" alt="Zertifikat 1" class="zertifikat">
                    </div>
                    <div class="image-box centered">
                        <img src="Kanti_Zeugnis_3.png" alt="Zertifikat 1" class="zertifikat">
                    </div>
                    <div class="image-box centered">
                        <img src="Kanti_Zeugnis_2.png" alt="Zertifikat 1" class="zertifikat">
                    </div>
                    <div class="image-box centered">
                        <img src="Kanti_Zeugnis_1.png" alt="Zertifikat 1" class="zertifikat">
                    </div>
                    <div class="image-box centered">
                        <img src="page-0.png" alt="Zertifikat 1" class="zertifikat">
                    </div>
                    <div class="image-box centered">    
                        <img src="page-1.png" alt="Zertifikat 2" class="zertifikat">
                    </div>
                    <div class="image-box centered">
                        <img src="page-2.png" alt="Zertifikat 3" class="zertifikat">
                    </div>
                    <div class="image-box centered">
                        <img src="page-3.png" alt="Zertifikat 1" class="zertifikat">
                    </div>
                    <div class="image-box centered">    
                        <img src="page-4.png" alt="Zertifikat 2" class="zertifikat">
                    </div>
                    <div class="image-box centered">
                        <img src="page-5.png" alt="Zertifikat 3" class="zertifikat">
                    </div>
                    <div class="image-box centered">
                        <img src="page-6.png" alt="Zertifikat 1" class="zertifikat">
                    </div>
                    <div class="image-box centered">    
                        <img src="page-7.png" alt="Zertifikat 2" class="zertifikat">
                    </div>
                    <div class="image-box centered">
                        <img src="page-8.png" alt="Zertifikat 3" class="zertifikat">
                    </div>
                    <div class="image-box centered">
                        <img src="page-9.png" alt="Zertifikat 3" class="zertifikat">
                    </div>
                </div>`;
            break;
    }
}

loadPage('ich');
showSlides();


