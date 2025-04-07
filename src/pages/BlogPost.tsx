
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, Calendar, Clock, Share2, Globe } from "lucide-react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedBlogPostUrl, getLocalizedPath } from "@/utils/urlUtils";
import { useTranslation } from "react-i18next";
import { SupportedLanguage } from "@/utils/languageUtils";

// Enhanced blog post data with multilingual support
const blogPostsData = {
  "annual-gathering": {
    title: {
      EN: "Annual Gathering in Vilnius",
      LT: "Kasmetinis susitikimas Vilniuje",
      PL: "Coroczne spotkanie w Wilnie"
    },
    date: "April 5, 2025",
    author: "Mindaugas Giedraitis",
    category: "Events",
    readTime: {
      EN: "5 min read",
      LT: "5 min. skaitymo",
      PL: "5 min czytania"
    },
    image: "/placeholder.svg",
    content: {
      EN: `
        <p class="mb-4 text-lg">The annual gathering of the House of Giedraičiai will take place in Vilnius this summer. Join us for three days of historical presentations, networking, and celebration of our shared heritage.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Event Details</h2>
        <p class="mb-4">The gathering will be held from July 15-17, 2025, at the Grand Hotel Vilnius. The event will feature presentations by historians, genealogists, and family members, as well as tours of historical sites associated with the Giedraičiai family.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Program Highlights</h2>
        <ul class="list-disc pl-5 mb-6 space-y-2">
          <li>Opening ceremony and welcome reception</li>
          <li>Keynote address by Dr. Jonas Mikalauskas on "The Giedraičiai Family in the Grand Duchy of Lithuania"</li>
          <li>Panel discussion: "Preserving Family Heritage in the Modern Age"</li>
          <li>Guided tour of the Old Town Vilnius, including sites associated with the family</li>
          <li>Excursion to the town of Giedraičiai and the ancestral manor site</li>
          <li>Genealogy workshop and individual consultations</li>
          <li>Gala dinner with traditional Lithuanian entertainment</li>
        </ul>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Registration</h2>
        <p class="mb-4">Registration will open on May 1, 2025. The event fee is €250 per person, which includes all presentations, tours, and meals. Accommodation at the Grand Hotel Vilnius is available at a special rate for participants.</p>
        
        <p class="mb-4">Early bird registration (before June 1) will receive a 15% discount. Association members receive an additional 10% discount.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Accommodations</h2>
        <p class="mb-6">We have secured a block of rooms at the Grand Hotel Vilnius at a special rate of €120 per night for single occupancy and €140 for double occupancy. To book at this rate, please use the code "GIEDRAITIS2025" when making your reservation.</p>
        
        <p class="text-lg font-medium mt-8 mb-4">We look forward to seeing you in Vilnius!</p>
      `,
      LT: `
        <p class="mb-4 text-lg">Kasmetinis Giedraičių giminės susitikimas vyks Vilniuje šią vasarą. Prisijunkite prie mūsų trijų dienų istorinių pristatymų, bendravimo ir bendro paveldo šventės.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Renginio informacija</h2>
        <p class="mb-4">Susitikimas vyks 2025 m. liepos 15-17 d. "Grand Hotel Vilnius" viešbutyje. Renginyje bus istorikų, genealogų ir šeimos narių pristatymai, taip pat ekskursijos po istorines vietas, susijusias su Giedraičių šeima.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Programos akcentai</h2>
        <ul class="list-disc pl-5 mb-6 space-y-2">
          <li>Atidarymo ceremonija ir pasveikinimo priėmimas</li>
          <li>Dr. Jono Mikalausko pagrindinis pranešimas "Giedraičių šeima Lietuvos Didžiojoje Kunigaikštystėje"</li>
          <li>Diskusija: "Šeimos paveldo išsaugojimas šiuolaikiniame amžiuje"</li>
          <li>Ekskursija po Vilniaus senamiestį, įskaitant su šeima susijusias vietas</li>
          <li>Išvyka į Giedraičių miestelį ir protėvių dvarvietę</li>
          <li>Genealogijos dirbtuvės ir individualios konsultacijos</li>
          <li>Iškilminga vakarienė su tradicine lietuviška programa</li>
        </ul>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Registracija</h2>
        <p class="mb-4">Registracija prasidės 2025 m. gegužės 1 d. Renginio mokestis - 250 € asmeniui, į kurį įeina visi pristatymai, ekskursijos ir maitinimas. Dalyvaujantiems siūlomas specialus apgyvendinimo tarifas "Grand Hotel Vilnius" viešbutyje.</p>
        
        <p class="mb-4">Išankstinei registracijai (iki birželio 1 d.) taikoma 15% nuolaida. Asociacijos nariai gauna papildomą 10% nuolaidą.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Apgyvendinimas</h2>
        <p class="mb-6">Užsisakėme kambarių bloką "Grand Hotel Vilnius" viešbutyje specialia kaina: 120 € už naktį vienam asmeniui ir 140 € dviems asmenims. Norėdami užsisakyti šia kaina, užsakydami nurodykite kodą "GIEDRAITIS2025".</p>
        
        <p class="text-lg font-medium mt-8 mb-4">Nekantriai laukiame susitikimo Vilniuje!</p>
      `,
      PL: `
        <p class="mb-4 text-lg">Coroczne spotkanie Rodu Giedraitis odbędzie się tego lata w Wilnie. Dołącz do nas na trzy dni prezentacji historycznych, kontaktów i świętowania naszego wspólnego dziedzictwa.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Szczegóły wydarzenia</h2>
        <p class="mb-4">Spotkanie odbędzie się w dniach 15-17 lipca 2025 r. w Grand Hotel Wilno. Podczas wydarzenia odbędą się prezentacje historyków, genealogów i członków rodziny, a także wycieczki po miejscach historycznych związanych z rodziną Giedraitis.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Główne punkty programu</h2>
        <ul class="list-disc pl-5 mb-6 space-y-2">
          <li>Ceremonia otwarcia i przyjęcie powitalne</li>
          <li>Główny wykład dr Jonasa Mikalauskasa o "Rodzinie Giedraitis w Wielkim Księstwie Litewskim"</li>
          <li>Panel dyskusyjny: "Zachowanie dziedzictwa rodzinnego w epoce nowożytnej"</li>
          <li>Zwiedzanie z przewodnikiem Starego Miasta w Wilnie, w tym miejsc związanych z rodziną</li>
          <li>Wycieczka do miasta Giedraičiai i siedziby rodowej</li>
          <li>Warsztaty genealogiczne i indywidualne konsultacje</li>
          <li>Uroczysta kolacja z tradycyjną litewską rozrywką</li>
        </ul>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Rejestracja</h2>
        <p class="mb-4">Rejestracja rozpocznie się 1 maja 2025 r. Opłata za wydarzenie wynosi 250 € od osoby i obejmuje wszystkie prezentacje, wycieczki i posiłki. Zakwaterowanie w Grand Hotel Wilno dostępne jest w specjalnej cenie dla uczestników.</p>
        
        <p class="mb-4">Wczesna rejestracja (przed 1 czerwca) otrzyma 15% zniżki. Członkowie stowarzyszenia otrzymują dodatkową zniżkę 10%.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Zakwaterowanie</h2>
        <p class="mb-6">Zabezpieczyliśmy blok pokoi w Grand Hotel Wilno w specjalnej cenie 120 € za noc za pojedyncze zakwaterowanie i 140 € za podwójne zakwaterowanie. Aby zarezerwować w tej cenie, prosimy o użycie kodu "GIEDRAITIS2025" podczas rezerwacji.</p>
        
        <p class="text-lg font-medium mt-8 mb-4">Czekamy na spotkanie w Wilnie!</p>
      `
    },
    languages: ["EN", "LT", "PL"] as SupportedLanguage[],
    relatedPosts: [
      {
        slug: "monument-restoration",
        title: {
          EN: "Monument Restoration Project",
          LT: "Paminklo restauravimo projektas",
          PL: "Projekt renowacji pomnika"
        },
        excerpt: {
          EN: "The historic Giedraičiai family chapel is undergoing restoration.",
          LT: "Istorinė Giedraičių šeimos koplyčia restauruojama.",
          PL: "Zabytkowa kaplica rodzinna Giedraitis jest poddawana renowacji."
        },
        image: "/placeholder.svg",
        languages: ["EN", "LT"] as SupportedLanguage[]
      },
      {
        slug: "new-board-members",
        title: {
          EN: "New Association Board Members",
          LT: "Nauji asociacijos valdybos nariai",
          PL: "Nowi członkowie zarządu stowarzyszenia"
        },
        excerpt: {
          EN: "The Giedraičiai Family Association welcomes three new board members.",
          LT: "Giedraičių šeimos asociacija sveikina tris naujus valdybos narius.",
          PL: "Stowarzyszenie Rodziny Giedraitis wita trzech nowych członków zarządu."
        },
        image: "/placeholder.svg",
        languages: ["EN", "LT", "PL"] as SupportedLanguage[]
      }
    ]
  },
  "historical-documents-discovery": {
    title: {
      EN: "Historical Documents Discovered",
      LT: "Atrasti istoriniai dokumentai",
      PL: "Odkryto historyczne dokumenty"
    },
    date: "March 20, 2025",
    author: "Dr. Elena Paulauskienė",
    category: "History",
    readTime: {
      EN: "8 min read",
      LT: "8 min. skaitymo",
      PL: "8 min czytania"
    },
    image: "/placeholder.svg",
    content: {
      EN: `
        <p class="mb-4 text-lg">A collection of previously unknown documents related to the Giedraičiai family has been discovered in the National Archives of Lithuania. These papers, dating back to the 16th century, shed new light on the family's role in the Grand Duchy of Lithuania.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">The Discovery</h2>
        <p class="mb-4">The documents were found during a routine digitization project at the National Archives. They were part of a larger collection of administrative records from the Vilnius Voivodeship. Archivist Dr. Tomas Rimkus recognized the Giedraičiai family seal on several of the documents and alerted our association's historical research committee.</p>
        
        <p class="mb-4">The collection includes correspondence, land grants, judicial records, and personal letters spanning from 1526 to 1658.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Historical Significance</h2>
        <p class="mb-4">The documents provide new insights into several aspects of the family's history:</p>
        
        <ul class="list-disc pl-5 mb-6 space-y-2">
          <li>Previously unknown land holdings in the Samogitia region</li>
          <li>Correspondence with the royal court regarding diplomatic missions</li>
          <li>Details of a marriage alliance with the Radziwiłł family in 1542</li>
          <li>Records of the family's participation in the Livonian War</li>
          <li>Personal letters that reveal daily life and relationships</li>
        </ul>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Research Project</h2>
        <p class="mb-4">Our association has launched a research project to study, translate, and digitize these documents. The project will be led by Dr. Elena Paulauskienė, professor of medieval history at Vilnius University, with assistance from graduate students and our association's historical committee.</p>
        
        <p class="mb-4">The first phase of the project will focus on transcription and translation of the documents. The second phase will involve historical analysis and publication of findings. We anticipate that the project will take approximately 18 months to complete.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Future Access</h2>
        <p class="mb-6">Once the documents have been digitized and analyzed, they will be made available through our association's digital archive. Members will have full access to high-resolution scans, transcriptions, translations, and analytical papers. Selected documents will also be featured in an exhibition at the National Museum of Lithuania in 2026.</p>
        
        <p class="text-lg font-medium mt-8 mb-4">This discovery represents a significant addition to our understanding of the Giedraičiai family's history and its role in the political and social life of the Grand Duchy of Lithuania.</p>
      `,
      LT: `
        <p class="mb-4 text-lg">Lietuvos nacionaliniame archyve atrasta anksčiau nežinomų dokumentų, susijusių su Giedraičių šeima. Šie XVI amžiaus dokumentai atskleidžia naujus faktus apie šeimos vaidmenį Lietuvos Didžiojoje Kunigaikštystėje.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Atradimas</h2>
        <p class="mb-4">Dokumentai buvo rasti vykdant įprastą skaitmeninimo projektą Nacionaliniame archyve. Jie buvo didesnės Vilniaus vaivadijos administracinių įrašų kolekcijos dalis. Archyvaras dr. Tomas Rimkus keliuose dokumentuose atpažino Giedraičių šeimos antspaudą ir informavo mūsų asociacijos istorinių tyrimų komitetą.</p>
        
        <p class="mb-4">Kolekcijoje yra korespondencija, žemės suteiktys, teismo įrašai ir asmeniniai laiškai, apimantys laikotarpį nuo 1526 iki 1658 m.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Istorinė reikšmė</h2>
        <p class="mb-4">Dokumentai suteikia naujų įžvalgų apie kelis šeimos istorijos aspektus:</p>
        
        <ul class="list-disc pl-5 mb-6 space-y-2">
          <li>Anksčiau nežinomos žemės valdos Žemaitijos regione</li>
          <li>Susirašinėjimas su karaliaus dvaru dėl diplomatinių misijų</li>
          <li>Detalės apie santuokos aljansą su Radvilų šeima 1542 m</li>
          <li>Įrašai apie šeimos dalyvavimą Livonijos kare</li>
          <li>Asmeniniai laiškai, atskleidžiantys kasdienį gyvenimą ir santykius</li>
        </ul>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Tyrimų projektas</h2>
        <p class="mb-4">Mūsų asociacija pradėjo tyrimų projektą, skirtą šiems dokumentams studijuoti, versti ir skaitmeninti. Projektui vadovaus dr. Elena Paulauskienė, Vilniaus universiteto viduramžių istorijos profesorė, kartu su magistrantais ir mūsų asociacijos istorijos komitetu.</p>
        
        <p class="mb-4">Pirmasis projekto etapas bus skirtas dokumentų transkripcijai ir vertimui. Antrasis etapas apims istorinę analizę ir rezultatų publikavimą. Manome, kad projekto trukmė bus apie 18 mėnesių.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Būsima prieiga</h2>
        <p class="mb-6">Kai dokumentai bus suskaitmeninti ir išanalizuoti, jie bus prieinami per mūsų asociacijos skaitmeninį archyvą. Nariai turės visišką prieigą prie didelės skiriamosios gebos nuskaitymų, transkripcijų, vertimų ir analitinių dokumentų. Pasirinkti dokumentai taip pat bus pristatyti parodoje Lietuvos nacionaliniame muziejuje 2026 m.</p>
        
        <p class="text-lg font-medium mt-8 mb-4">Šis atradimas reikšmingai prisideda prie mūsų supratimo apie Giedraičių šeimos istoriją ir jos vaidmenį Lietuvos Didžiosios Kunigaikštystės politiniame ir socialiniame gyvenime.</p>
      `,
      PL: `
        <p class="mb-4 text-lg">W Narodowym Archiwum Litwy odkryto kolekcję nieznanych wcześniej dokumentów związanych z rodziną Giedraitis. Te dokumenty z XVI wieku rzucają nowe światło na rolę rodziny w Wielkim Księstwie Litewskim.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Odkrycie</h2>
        <p class="mb-4">Dokumenty zostały znalezione podczas rutynowego projektu digitalizacji w Archiwum Narodowym. Były częścią większej kolekcji akt administracyjnych z województwa wileńskiego. Archiwista dr Tomas Rimkus rozpoznał pieczęć rodziny Giedraitis na kilku dokumentach i powiadomił komitet badań historycznych naszego stowarzyszenia.</p>
        
        <p class="mb-4">Kolekcja obejmuje korespondencję, nadania ziemskie, akta sądowe oraz listy prywatne z lat 1526-1658.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Znaczenie historyczne</h2>
        <p class="mb-4">Dokumenty dostarczają nowych informacji na temat kilku aspektów historii rodziny:</p>
        
        <ul class="list-disc pl-5 mb-6 space-y-2">
          <li>Wcześniej nieznane posiadłości ziemskie w regionie Żmudzi</li>
          <li>Korespondencja z dworem królewskim dotycząca misji dyplomatycznych</li>
          <li>Szczegóły sojuszu małżeńskiego z rodziną Radziwiłłów w 1542 roku</li>
          <li>Zapisy o udziale rodziny w wojnie inflanckiej</li>
          <li>Listy prywatne ukazujące życie codzienne i relacje</li>
        </ul>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Projekt badawczy</h2>
        <p class="mb-4">Nasze stowarzyszenie rozpoczęło projekt badawczy mający na celu studiowanie, tłumaczenie i digitalizację tych dokumentów. Projektem kierować będzie dr Elena Paulauskienė, profesor historii średniowiecznej na Uniwersytecie Wileńskim, przy wsparciu studentów studiów magisterskich i komitetu historycznego naszego stowarzyszenia.</p>
        
        <p class="mb-4">Pierwsza faza projektu skupi się na transkrypcji i tłumaczeniu dokumentów. Druga faza będzie obejmować analizę historyczną i publikację wyników. Przewidujemy, że projekt zajmie około 18 miesięcy.</p>
        
        <h2 class="text-2xl font-serif text-[#8B1E3F] mt-8 mb-4">Przyszły dostęp</h2>
        <p class="mb-6">Po zdigitalizowaniu i przeanalizowaniu dokumentów będą one dostępne w cyfrowym archiwum naszego stowarzyszenia. Członkowie będą mieli pełny dostęp do skanów wysokiej rozdzielczości, transkrypcji, tłumaczeń i prac analitycznych. Wybrane dokumenty zostaną również zaprezentowane na wystawie w Narodowym Muzeum Litwy w 2026 roku.</p>
        
        <p class="text-lg font-medium mt-8 mb-4">To odkrycie stanowi znaczące uzupełnienie naszego zrozumienia historii rodziny Giedraitis i jej roli w życiu politycznym i społecznym Wielkiego Księstwa Litewskiego.</p>
      `
    },
    languages: ["EN", "LT", "PL"] as SupportedLanguage[],
    relatedPosts: [
      {
        slug: "interview-with-historian",
        title: {
          EN: "Interview with Historian Dr. Aleksas Vaitkus",
          LT: "Interviu su istoriku dr. Aleksu Vaitkumi",
          PL: "Wywiad z historykiem dr Aleksasem Vaitkusem"
        },
        excerpt: {
          EN: "Renowned Lithuanian historian Dr. Aleksas Vaitkus discusses his recent findings.",
          LT: "Garsus Lietuvos istorikas dr. Aleksas Vaitkus aptaria savo naujausius atradimus.",
          PL: "Uznany litewski historyk dr Aleksas Vaitkus omawia swoje najnowsze odkrycia."
        },
        image: "/placeholder.svg",
        languages: ["EN", "LT"] as SupportedLanguage[]
      },
      {
        slug: "genealogy-research-advances",
        title: {
          EN: "Advances in Genealogy Research",
          LT: "Pažanga genealogijos tyrimuose",
          PL: "Postępy w badaniach genealogicznych"
        },
        excerpt: {
          EN: "Our genealogy team has made significant progress in documenting the family's branches.",
          LT: "Mūsų genealogijos komanda padarė didelę pažangą dokumentuojant šeimos šakas.",
          PL: "Nasz zespół genealogiczny poczynił znaczne postępy w dokumentowaniu gałęzi rodziny."
        },
        image: "/placeholder.svg",
        languages: ["EN", "PL"] as SupportedLanguage[]
      }
    ]
  },
  // Add other blog posts with multilingual content as needed
};

const BlogPost = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const post = slug ? blogPostsData[slug as keyof typeof blogPostsData] : null;
  
  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto py-20 px-4 text-center">
          <h1 className="text-3xl font-serif text-[#8B1E3F] mb-6">{t('blogPost.notFound')}</h1>
          <p className="mb-8">{t('blogPost.doesNotExist')}</p>
          <Link to={getLocalizedPath("blog", language)}>
            <Button className="bg-[#C9A13B] hover:bg-[#8B1E3F]">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t('blogPost.backToBlog')}
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  // Check if the post is available in the current language
  const isAvailableInCurrentLanguage = post.languages.includes(language);
  
  // If not available in current language, find an available language
  const displayLanguage = isAvailableInCurrentLanguage ? language : post.languages[0];
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="mb-8">
          <Link to={getLocalizedPath("blog", language)}>
            <Button variant="outline" className="border-[#C9A13B] text-[#C9A13B] hover:bg-[#C9A13B] hover:text-white">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t('blogPost.backToBlog')}
            </Button>
          </Link>
        </div>
        
        <div className="mb-6">
          <Badge variant="outline" className="border-[#C9A13B] text-[#8B1E3F] mb-4">
            {t(`blog.categories.${post.category.toLowerCase()}`)}
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#8B1E3F] mb-4">
            {post.title[displayLanguage]}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime[displayLanguage]}
            </div>
            <div>By {post.author}</div>
          </div>
          
          {/* Language Availability Badges */}
          <div className="flex items-center gap-2 mb-6">
            <Globe className="h-4 w-4 text-gray-500" />
            <div className="flex gap-1">
              {post.languages.map(lang => (
                <Badge 
                  key={lang}
                  variant={lang === displayLanguage ? "default" : "outline"}
                  className={lang === displayLanguage 
                    ? "bg-[#C9A13B]" 
                    : "border-[#C9A13B] text-[#8B1E3F]"}
                >
                  {lang}
                </Badge>
              ))}
            </div>
          </div>
          
          {/* Language Warning */}
          {!isAvailableInCurrentLanguage && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-700">
                {t('blogPost.notAvailableInLanguage', { language: language })}
                {t('blogPost.displayingIn', { language: displayLanguage })}
              </p>
            </div>
          )}
        </div>
        
        {/* Featured Image */}
        <div className="aspect-video bg-gray-100 mb-8 rounded-lg overflow-hidden">
          <img src={post.image} alt={post.title[displayLanguage]} className="w-full h-full object-cover" />
        </div>
        
        {/* Blog Content */}
        <div 
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content[displayLanguage] }}
        />
        
        {/* Share Links */}
        <div className="flex items-center gap-3 border-t border-gray-200 mt-12 pt-6">
          <span className="font-medium text-gray-700 flex items-center">
            <Share2 className="h-4 w-4 mr-2" /> {t('blogPost.share')}:
          </span>
          <div className="flex gap-3">
            <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0">
              <span className="sr-only">Share on Facebook</span>
              F
            </Button>
            <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0">
              <span className="sr-only">Share on Twitter</span>
              T
            </Button>
            <Button variant="outline" size="sm" className="rounded-full w-8 h-8 p-0">
              <span className="sr-only">Share on LinkedIn</span>
              L
            </Button>
          </div>
        </div>
        
        {/* Related Posts */}
        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-serif text-[#8B1E3F] mb-6">{t('blogPost.relatedArticles')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost, index) => {
                // Determine display language for related post
                const relatedPostLang = relatedPost.languages.includes(language) ? 
                  language : relatedPost.languages[0];
                
                return (
                  <Link to={getLocalizedBlogPostUrl(relatedPost.slug, language)} key={index}>
                    <Card className="border-[#C9A13B]/20 hover:shadow-md transition-all h-full">
                      <div className="aspect-video bg-gray-100">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title[relatedPostLang]} 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <CardTitle className="text-lg font-serif text-[#8B1E3F]">
                            {relatedPost.title[relatedPostLang]}
                          </CardTitle>
                          <div className="flex gap-1">
                            {relatedPost.languages.map(lang => (
                              <Badge key={lang} variant="secondary" className="text-xs">
                                {lang}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">
                          {relatedPost.excerpt[relatedPostLang]}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BlogPost;
