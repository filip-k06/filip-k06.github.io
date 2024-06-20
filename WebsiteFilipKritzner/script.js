function loadPage(page) {
    let content = document.getElementById('content');
    switch(page) {
        case 'ich':
            content.innerHTML = `
                <div class="content inner">
                    <div class="info">
                        <h2>Über mich</h2>
                        <p>Grüezi! Mein Name ist Filip Kritzner. Ich bin in der zweiten Klasse der Informatikmittelschule Baden und suche zurzeit ein Praktikum für mein viertes Ausbildungsjahr August 2025.</p>
                        <p>Nutzen Sie das Menü auf der linken Seite, um zwischen den verschiedenen Seiten zu navigieren.</p>
                        <p>Herzlichen Dank, dass Sie sich die Zeit genommen haben, meine Webseite zu besuchen!</p>
                        <p></p>
                    </div>
                </div>
                <div class="content inner">
                    <h2>Meine Hobbys</h2>
                    <div class="image-box">
                        <img src="zertifikat1.jpg" alt="Beschreibung des Bildes" class="image-text">
                        <div class="text-overlay">
                            <h1>Dein Titel</h1>
                            <p>Dein Text über das Bild.</p>
                        </div>
                    </div>
                </div>
                <div class="content inner">
                    <h2>Meine Fähigkeiten</h2>
                    <div class="skill-bar"><span>C#</span><div class="bar"><div class="bar-inner" style="width: 80%;"></div></div></div>
                    <div class="skill-bar"><span>C</span><div class="bar"><div class="bar-inner" style="width: 70%;"></div></div></div>
                    <div class="skill-bar"><span>Python</span><div class="bar"><div class="bar-inner" style="width: 90%;"></div></div></div>
                    <div class="skill-bar"><span>Docker</span><div class="bar"><div class="bar-inner" style="width: 75%;"></div></div></div>
                    <div class="skill-bar"><span>IPERKA</span><div class="bar"><div class="bar-inner" style="width: 85%;"></div></div></div>
                    <div class="skill-bar"><span>Scrum</span><div class="bar"><div class="bar-inner" style="width: 80%;"></div></div></div>
                    <div class="skill-bar"><span>HTML</span><div class="bar"><div class="bar-inner" style="width: 95%;"></div></div></div>
                    <div class="skill-bar"><span>JavaScript</span><div class="bar"><div class="bar-inner" style="width: 85%;"></div></div></div>
                    <div class="skill-bar"><span>CSS</span><div class="bar"><div class="bar-inner" style="width: 90%;"></div></div></div>
                </div>
                <div class="content inner">
                    <h2>Schulische Ausbildung</h2>
                    <ul>
                        <li>Grundschule: [Schule Name, Jahr]</li>
                        <li>Weiterführende Schule: [Schule Name, Jahr]</li>
                        <li>Universität: [Universität Name, Jahr, Abschluss]</li>
                    </ul>
                </div>
                <div class="content inner">
                    <h2>Sprachen</h2>
                    <ul>
                        <div class="skill-bar"><span>Tschechisch, Muttersprache</span><div class="bar"><div class="bar-inner" style="width: 100%;"></div></div></div>
                        <div class="skill-bar"><span>Deutsch, Mundart fliessend</span><div class="bar"><div class="bar-inner" style="width: 100%;"></div></div></div>
                        <div class="skill-bar"><span>Englisch, im 9. Schuljahr</span><div class="bar"><div class="bar-inner" style="width: 75%;"></div></div></div>
                        <div class="skill-bar"><span>Französisch, im 6. Schuljahr</span><div class="bar"><div class="bar-inner" style="width: 25%;"></div></div></div>
                        <div class="container">
                        <div class="skill-box d-flex align-items-center">
                        <p class="mb-0 mr-3">HTML</p>
                            <div class="d-flex">
                                <div class="box filled"></div>
                                <div class="box filled"></div>
                                <div class="box filled"></div>
                            </div>
                        </div>
                        <div class="skill-box d-flex align-items-center">
                        <p class="mb-0 mr-3">HTML</p>
                            <div class="d-flex">
                                <div class="box filled"></div>
                                <div class="box filled"></div>
                                <div class="box"></div>
                            </div>
                        </div>
                        <div class="skill-box d-flex align-items-center">
                        <p class="mb-0 mr-3">HTML</p>
                            <div class="d-flex">
                                <div class="box filled"></div>
                                <div class="box"></div>
                                <div class="box"></div>
                            </div>
                        </div>
                    </div>
                    </ul>
                </div>
                <div class="content inner">
                    <h2>Portfolios</h2>
                    <p>Alle Projekte mit Direktzugriff</p>
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
                </div>`;
            break;
        case 'zertifikate':
            content.innerHTML = `
                <div class="content inner">
                    <h2>Zertifikate und Zeugnisse</h2>
                    <div class="image-box">
                        <img src="page-0.png" alt="Zertifikat 1" class="zertifikat">
                    </div>
                    <div class="image-box">    
                        <img src="page-1.png" alt="Zertifikat 2" class="zertifikat">
                    </div>
                    <div class="image-box">
                        <img src="page-2.png" alt="Zertifikat 3" class="zertifikat">
                    </div>
                    <div class="image-box">
                        <img src="page-3.png" alt="Zertifikat 1" class="zertifikat">
                    </div>
                    <div class="image-box">    
                        <img src="page-4.png" alt="Zertifikat 2" class="zertifikat">
                    </div>
                    <div class="image-box">
                        <img src="page-5.png" alt="Zertifikat 3" class="zertifikat">
                    </div>
                    <div class="image-box">
                        <img src="page-6.png" alt="Zertifikat 1" class="zertifikat">
                    </div>
                    <div class="image-box">    
                        <img src="page-7.png" alt="Zertifikat 2" class="zertifikat">
                    </div>
                    <div class="image-box">
                        <img src="page-8.png" alt="Zertifikat 3" class="zertifikat">
                    </div>
                    <div class="image-box">
                        <img src="page-9.png" alt="Zertifikat 3" class="zertifikat">
                    </div>
                </div>`;
            break;
    }
}

loadPage('ich');
