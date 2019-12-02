import { Component } from '@angular/core';
import { Question } from './question';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test: Array<Question> = [];
  title = 'simple-tester';
  isButtonVisible = true;
  isButtonQuizVisible = false;
  answerVisibe= false;
  endScoreVisible = false;
  answertext = '';
  percentageScore = 0.0;
  score = 0;
  nextTxT = 'Next question'
  question = '';
  answerA = '';
  answerB = '';
  answerC = '';
  answerD = '';
  actualScore = 0;
  correct = 0;
  questionNumber = 0;

  startQuiz(random){
    this.isButtonVisible = false;
    this.isButtonQuizVisible = true;
    this.questionNumber = 1;
    this.score = 0;
    this.initializeTestQuestions(random);
    this.nextQuestion();
  }

  nextQuestion(){
    this.answerVisibe = false;
    this.actualScore = this.score/(this.questionNumber-1)*100.0;
    if(this.questionNumber != 31){
      if(this.questionNumber == 30) this.nextTxT = 'Finish';
      var q = this.test.pop();
      this.question = this.questionNumber +") "+ q.question;
      this.answerA = 'a) '+q.a;
      this.answerB = 'b) '+q.b;
      this.answerC = 'c) '+q.c;
      this.answerD = 'd) '+q.d;
      this.correct = q.correct;
    }else{
      this.percentageScore = this.score/30.0*(100);
      this.endScoreVisible = true;
      this.answerVisibe = false;
      this.isButtonQuizVisible = false;
      this.question = '';
    }
  }

  reset(){
    location.reload();
  }

  answer(ans){
    if(ans == this.correct){
      this.answertext = 'Correct!';
      this.score++;
    }else{
      this.answertext = 'Bad answer, correct: '+this.getCorrectanswerChar();
    }
    this.answerVisibe = true;
    this.questionNumber++;
  }

  getCorrectanswerChar(){
    if(this.correct == 1) return 'a';
    else if(this.correct == 2) return 'b';
    else if(this.correct == 3) return 'c';
    else return 'd';
  }

  initializeTestQuestions(random){
    //1
    this.test.push(new Question('Systemy PSoC od systemów SoC różnią się tym, że ','systemy PSoC są systemami z definicji programowalnymi, a systemy SoC nie muszą spełniać tego ','systemy PSoC w odróżnieniu od systemów SoC są bardziej energooszczędne','systemy PSoC w odróżnieniu od systemów SoC zawsze wyposażone są w bezprzewodowy interfejs do komunikacji z nimi','systemy PSoC w odróżnieniu od systemów SoC posiadają bardziej specjalizowane układy peryferyjne ', 1));
    //2
    this.test.push(new Question('Jakie instrukcje są dopuszczalne w schemacie przetwarzania programu programowalnego sterownika logicznego PLC?','pętle typu for, while, do while','instrukcje warunkowe typu if, operacje logiczne typu and , or','wszystkie instrukcje znane z języka c','skoki do dowolnego miejsca w programie', 2));
    //3
    this.test.push(new Question('Które z poniższych stwierdzeń jest prawdziwe w przypadku programowalnego sterownika logicznego  PLC',
    'Stany wejść/wyjść sterownika PLC mogą być sprawdzane/ustawiane w dowolnym etapie przetwarzania programu',
    'sterowniki PLC posiadają tylko wejścia cyfrowe',
    'najczęściej spotykanym językiem programowania sterowników PLC jest język C',
    'program wykonuje się zawsze od początku do końca, w nieskończonej pętli',4));
    //4
    this.test.push(new Question('W systemie bluetooth pojedyncza pikosieć może składać się z…',
    '1 węzła master i dowolnej liczby aktywnych węzłów typu slave',
    '1 węzła typu master i 7 aktywnych węzłów typu slave',
    '1 węzła typu master i 255 aktywnych węzłów  typu slave',
    '7 węzłów typu master i 255 aktywnych węzłów typu slave',2));
    //5
    this.test.push(new Question('Które z poniższych stwierdzeń jest prawdziwe dla technologii bluetooth',
    'układ typu master kontroluje zegar i przydziela szczeliny czasowe w czasie wymiany danych z układami typu slave',
    'w stosie sieciowym bluetooth zdefiniowane są dwie najniższe warstwy(fizyczna i łącza danych), a pozostałe są puste',
    'układy typu slave mogą komunikować się między sobą, ale tylko w szczególnych przypadkach',
    'prędkość transmisji danych jest zawsze stała i zależna od możliwości układu slave, z którym aktualnie trwa wymiana danych',1));
    //6
    this.test.push(new Question('W jaki sposób sprawdza się poprawność przesłania nagłówka w ramce wiadomości bluetooth',
    'poprzez trzykrotne powtórzenie tego samego bitu (“wygrywa większość”)',
    'żaden, gdyż nie ma takiej potrzeby',
    'poprzez bity kontrolne w nagłówku o ściśle określonej wartości 0/1',
    'na końcu nagłówka znajduje się suma kontrolna',1));
    //7
    this.test.push(new Question('Które z poniższych stwierdzeń jest prawdziwe dla technologii zigbee',
    'transmisja danych odbywa się w sposób synchroniczny - gwarancja stałej prędkości przesyłania danych',
    'transmisja danych odbywa się w sposób asynchroniczny (nieregularny) z niedużymi prędkościami (do 250kb/s)',
    'w sieci zigbee urządzenie końcowe o ukierunkowanej funkcjonalności może pracować tylko w topologii peer to peer',
    'typowym zastosowaniem technologii zigbee są transmisja obrazu i dźwięku na nieduże odległości w czasie rzeczywistym',2));
    //8
    this.test.push(new Question('W sieci zigbee urządzenie o pełnej funkcjonalności (FFD) może pełnić rolę',
    'tylko koordynatora sieci',
    'tylko routera',
    'dowolną (koordynatora sieci, routera, urządzenia końcowego)',
    'tylko urządzenia końcowego',3));
    //9
    this.test.push(new Question('Jaka jest możliwa topologia sieci zigbee?',
    'tylko gwiazda',
    'tylko peer to peer',
    'tylko sieci',
    'nie ma ściśle określonej topologii dla sieci zigbee',4));
    //10
    this.test.push(new Question('Jaka operacja wykonywana na danych z IMU (Intertial Measurements Unit) w celu uzyskania informacji o zmianie położenia i orientacji obiektu jest najbardziej charakterystyczna?',
    'całkowanie',
    'różniczkowanie',
    'dodawanie',
    'dzielenie',1));
    //11
    this.test.push(new Question('Który z podanych charakterystyk danych sensorów peryferyjnych  (akcelerometr, żyroskop) jest błędem poprawności wskazań?',
    'Błąd niedokładności kalibracji',
    'Błąd systematyczny (bias) ',
    'Błąd w kolejności wykonywania zadań',
    'Błąd współczynnika skali',2));
    //12
    this.test.push(new Question('Które elementy są kluczowe dla nawigacji mobilnej GPS ze względu na dokładność lokalizacji?',
    'procesor i system operacyjny',
    'system operacyjny i mapy',
    'odbiornik GPS i procesor',
    'odbiornik GPS i mapy',3));
    //13
    this.test.push(new Question('Który z wymienionych ekranów dotykowych nie może być obsługiwany dowolnym przedmiotem?',
    'rezystancyjny',
    'pojemnościowy',
    'Infrared',
    'ARP',2));
    //14
    this.test.push(new Question('Który z wymienionych paneli dotykowych posiada obsługę więcej niż dwoma palcami jednocześnie (multitouch)?',
    'Pojemnościowy NFI',
    'Infrared',
    'APR',
    'Rezystancyjny',2));
    //15
    this.test.push(new Question('Które z poniższych zdań jest prawdziwe w przypadku mikrokontrolerów z rdzeniem ARM?',
    'Prawie każda instrukcja może być wykonywana warunkowo',
    'Posiadają sprzętowy ... w celu przyspieszenia wykonywania programów oraz szybszej obsługi przerwań',
    'Posiadają 31 rejestrów ogólnego przeznaczenia dostępnych dla programisty',
    'W trybie użytkownika program ma dostęp do wszystkich zasobów i instrukcji',1));
    //16
    this.test.push(new Question('Tryb THUMB w mikrokontrolerach z rdzeniem ARM służy do',
    'obsługi wyjątków',
    'obsługi przerwań',
    'wykonywania 16 bitowych instrukcji',
    'wywoływania funkcji systemowych',3));
    //17
    this.test.push(new Question('Gdzie zapisywany jest adres powrotu z obsługi wyjątku w mikroprocesorach z rdzeniem ARM?',
    'na stosie',
    'w rejestrze CPSR',
    'w rejestrze SPSR',
    'w rejestrze R14',4));
    //18
    this.test.push(new Question('Która z wymienionych technologii transmisji danych wykorzystywanych w telefonii komórkowej jest najwolniejsza?',
    'CSD',
    'GPRS',
    'HSPA',
    'UTMS',1));
    //19
    this.test.push(new Question('Następca standardu UMTS (Universal Mobile Telecommunication System) jest:',
    'NMT',
    'LTE/4G',
    'GSM',
    'AMPS',2));
    //20
    this.test.push(new Question(' Który z wymienionych mobilnych systemów operacyjnych powstał jako pierwszy?',
    'Symbian',
    'Android',
    'iOS',
    'Windows Phone',1));
    //21
    this.test.push(new Question('System SCADA to:',
    'system nadzorujący przebieg procesu technologicznego lub produkcyjnego (Supervisory Control And Data Acquisition)',
    'system czasu rzeczywistego do zadań krytycznych',
    'system pozwalający na bezprzewodową transmisję danych pomiarowych w sieciach sensorowych',
    'system operacyjny dla mikrokontrolerów z rdzeniem ARM',1));
    //22
    this.test.push(new Question('Które z poniższych zdań jest prawdziwe w przypadku układów FPGA (Field programmable gate array)?',
    'Mogą być wielokrotnie przeprogramowywane po tym, jak zostały wytworzone ',
    'Użytkownik sam projektuje wszystkie, lub wybrane jednostki logiczne, ich rozmieszczenie oraz połączenia między nimi',
    'Są szybsze, pobierają mniej mocy od odpowiadających im układów ASIC',
    'Mają architekturę zbliżoną do architektury 32 bitowych mikrokontrolerów z układem ARM',1));
    //23
    this.test.push(new Question('Który język programowania należy wybrać do konfiguracji układu FPGA?',
    'Dedykowany assembler',
    'Język opisu sprzętu VHDL',
    'z dedykowanymi bibliotekami',
    'dedykowany BASCOM',2));
    //24
    this.test.push(new Question('Co jest najczęściej wykorzystywane do konfiguracji układów FPGA?',
    'EEPROM',
    'SRAM',
    'ROM',
    'Przepalanie (fuse)',2));
    //25
    this.test.push(new Question('Program w czasie wykonywania to',
    'wątek',
    'sekwencja',
    'proces',
    'kod',3));
    //26
    this.test.push(new Question('W diagramie stanów procesu, która z wymienionych poniżej ścieżek przejścia od stanu nowy do stanu zakończony może wystąpić w czasie wykonywania programu?',
    'nowy -> oczekujący -> wykonywany -> gotowy -> zakończony',
    'nowy -> gotowy -> wykonywany -> gotowy -> wykonywany -> zakończony',
    'nowy -> gotowy -> zakończony',
    'nowy -> wykonywany -> zakończony',2));
    //27
    this.test.push(new Question('Za pomocą magistrali komunikacyjnej CAN dane przesyłane są:',
    'szeregowo asynchronicznie',
    'szeregowo synchronicznie',
    'szeregowo, w dwóch kierunkach jednocześnie',
    'równolegle',1));
    //28
    this.test.push(new Question('Topologia sieci CAN to',
    'magistrala',
    'siatka ',
    'peer to peer',
    'gwiazda',1));
    //29
    this.test.push(new Question('Jaki mechanizm zaimplementowany do rozstrzygania konfliktów w czasie nadawania przez więcej niż jedną stację w sieci CAN?',
    'w ramce wiadomości jest zawarte pole arbitrażu zawierające identyfikator wiadomości/stacji (im niższy id tym wyższy priorytet)',
    'Nie ma takiej potrzeby, gdyż w danej sieci jest zawsze jeden układ typu master, który decyduje kiedy i z jakim układem typu slave stacje wymieniają dane',
    'w sieci znajduje się układ tzw. arbitra, który decyduje która stacja w danej chwili może nadawać',
    'Jeśli kilka stacji nadaje w tym samym czasie, to na podstawie identyfikatora wiadomości/stacji stacja docelowa identyfikuje która wiadomość jest przeznaczona dla niej',1));
    //30
    this.test.push(new Question('W systemie plików FAT ??(chyba limit) klastrów określony jest przez:',
    'liczbę bajtów przeznaczonych na klaster w tablicy alokacji',
    'rozmiar sektora',
    'rozmiar partycji',
    'liczbę sektorów przypadających na jeden klaster',1));
    if(random == false){
      this.test.reverse();
    }
    else{
      this.shuffleArray();
    }
  }

  shuffleArray() {
    for (var i = this.test.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.test[i];
        this.test[i] = this.test[j];
        this.test[j] = temp;
    }
}
}