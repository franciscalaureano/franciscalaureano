
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/geral.css"></link>
    <link rel="stylesheet" type="text/css" href="css/footer.css"></link>

    <link rel="stylesheet" href="https://use.typekit.net/yzr0six.css">

    <title>Francisca Laureano</title>
</head>
<body>
    <!---------------------------------------->
    <!-------------- HEADER ------------------>
    <!---------------------------------------->
    <header>
        <nav>
          <a href="index.html" id="logo">
            <img
              src="img/logo.png"
              alt="Francisca Laureano logo"
              width="100%"
              height="auto"
            />
          </a>
  
          <div id="burger">
            <img src="img/menu.png" width="100%" height="auto" />
          </div>
          <ul id="nav_links_ul">
            <li id="work_link"><a href="work.html">work</a></li>
            <li id="about_link"><a href="about.html">about</a></li>
            <li id="contact_link"><a href="contact.html">contact</a></li>
          </ul>
        </nav>
      </header>


  <!---------------------------------------->
  <!------------- Contact Me --------------->
  <!---------------------------------------->
  <h1 id="h1_contact">Contact Me</h1>

  <?php

        if (isset($_POST['submit'])){
           // $name = $_POST['name'];
            $email = $_POST['email'];
            $subjectP = $_POST['subject'];
            $description = $_POST['description'];

            $to = "franciscarlaureano@gmail.com";

            $subject = "Proposta Trabalho +" . $subjectP;
            $message = "Message:" . $description;
            $headers = "From:" . $email;
            //$parameters= "Name:" . $name
           
           
            

            mail($to, $subject, $message, $headers );
            //header("Location: sobre_nos.php?mailsend");
            echo "<p style='color: #C25151'>Obrigada pelo e-mail :) Entrarei em contacto brevemente!";
        }
        ?>

  <form method="post" action="contact.php">
    <label>Temos todo o gosto em falar contigo! Envia-nos o teu email:</label>
   <!-- <input type="text" name="name">-->
    <input type="text" name="email">
    <input type="text" name="subject">
    <input type="text" name="description">
    <input type="submit" name="submit" value="Enviar">
</form>

    <!---------------------------------------->
    <!--------------- footer ----------------->
    <!---------------------------------------->
    <footer>
      <p id="text_footer">subscribe to become besties ☺️</p>
 
      <form action="https://instagram.us6.list-manage.com/subscribe/post?u=2290fe702db1112a2df270b7e&amp;id=ad6b7535b3"
         method="post"
         id="mc-embedded-subscribe-form"
         name="mc-embedded-subscribe-form"
         class="validate"
         target="_blank"
         novalidate>
 
         <input id="form_email" type="email"
         value=""
         name="EMAIL"
         class="email"
         id="mce-EMAIL"
         placeholder="e-mail"
         required
         />
         <button 
         type="submit" 
         id="form_submit" 
         >subscribe</button>
          <!-- <input
           id="form_submit"
           type="image"
           src="img/arrow.png"
           />-->
       </form>
           
       <section id="social_media">
         <a href="">  <img src="img/footer/instagram.png" width="100%" height="auto"></a>
         <a href="">  <img src="img/footer/behance2.png" width="100%" height="auto"></a>
         <a href="">  <img src="img/footer/linkedin.png" width="100%" height="auto"></a>
       </section>
     </footer>
    
</body>
</html>
  
        







    