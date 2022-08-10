

  <?php
  header('Location:contact.html');

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
        







    