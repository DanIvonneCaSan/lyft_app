# LYFT App

Is a ***mobile aplication***, that suggest the LOG IN and SIGN UP for the users of Lyft, that is an on demand transportation company.

## Programmflow 

Starts with a plash view whose duration is 5 seconds, then redirects to the initial view that has two buttons, one is the **SIGN UP** and  the other is "LOG IN".

![splash_initial_view](https://user-images.githubusercontent.com/32868919/38169401-8bdef79e-3526-11e8-9cd0-2a0beefccf1d.png)

1. The squence when the user push the **SIGN UP** is:

![0_signup](https://user-images.githubusercontent.com/32868919/38169460-aa55dc00-3527-11e8-958e-d8197389f101.png)

  - A form is presented where the user can choose the country and must enter his phone number. The **Next** button must be disabled until a 10-digit number is entered.

![1_signup](https://user-images.githubusercontent.com/32868919/38169447-9cef5c6c-3527-11e8-8c0b-89e184d4403f.png)

  - If the user don't introduce a phone number, an alert message is display.

![2_signup](https://user-images.githubusercontent.com/32868919/38169462-b9c355d2-3527-11e8-915a-4fdfcec0c817.png)

  - The button is enabled because a phone number was introduced and an alert with a randomly generated code (LAB-000) appears, then the user is redirected to the next view.

![coded](https://user-images.githubusercontent.com/32868919/38169477-281bf976-3528-11e8-8b7d-f2b726ba34bd.png)

  - When the user select **Resend Code** a new code is generated and a message of validation emerge at the time of the correct code is entered.

![codecorrect](https://user-images.githubusercontent.com/32868919/38169479-30e9de2e-3528-11e8-9cda-b7cae8a535f2.png)

  - A form request the name, surname and email of the user. The checkbox will be selected to accept the terms and conditions of the service.

![signup](https://user-images.githubusercontent.com/32868919/38169501-bbe44b2c-3528-11e8-95f1-5fc6e5a2e2f8.png)

![terms_selected](https://user-images.githubusercontent.com/32868919/38169506-dcacbd1c-3528-11e8-96ab-8ff14bfc0890.png)

  - This view will reveal that the user complete the process.

![final_screen](https://user-images.githubusercontent.com/32868919/38169511-f9b35ee8-3528-11e8-8ea7-1d20759a67de.png)

2. If the **LOG IN** button is selected, the next views will be displayed:

  - When the user miss out to fill a field an alert message show up.
  
![1_login](https://user-images.githubusercontent.com/32868919/38169602-b915aa14-352b-11e8-9c65-34080be07481.png)

![login_final](https://user-images.githubusercontent.com/32868919/38169603-badb2252-352b-11e8-95bf-c5568249c96e.png)


## Developed for and with:

[Laboratoria](http://laboratoria.la)

# LYFT App
Replica del sitio de **Lyft**, cumpliendo los pasos necesarios para que el usuario pueda registrarse.

**FLUJO DE LA APLICACIÓN**

Vista splash con duración de 2 a 5 segundos que redirecciona a la vista de inicio. 

1. La vista de inicio cuenta con dos botones, a continuación se presenta el flujo de **SIGN UP**.

![0_signup](https://user-images.githubusercontent.com/32868919/38169460-aa55dc00-3527-11e8-958e-d8197389f101.png)

  - En la siguiente vista tenemos el formulario donde el usuario puede escoger el país y debe ingresar su número de teléfono. El botón de **NEXT** debe estar deshabilitado hasta que se ingrese un número de 10 dígitos.

![2_signup](https://user-images.githubusercontent.com/32868919/38169462-b9c355d2-3527-11e8-915a-4fdfcec0c817.png)

  - Una vez ingresado, el número de teléfono se habilita el botón y al dar *click* debe enviar una alerta con un código generado aleatoriamente (LAB-000) y redireccionar a la siguiente vista.

![coded](https://user-images.githubusercontent.com/32868919/38169477-281bf976-3528-11e8-8b7d-f2b726ba34bd.png)

  - En esta vista se debe ingresar el código dado anteriormente y una vez hecho esto se habilita el botón que redirecciona al usuario a la vista donde ingresa sus datos. (Puede tener la opción de enviar otro código.)

![codecorrect](https://user-images.githubusercontent.com/32868919/38169479-30e9de2e-3528-11e8-9cda-b7cae8a535f2.png)

  - Para ingresar los datos, se requiere de un formulario que solicite su nombre, apellido y correo electrónico. Deberá también tener un checkbox para que se acepten los términos y condiciones del servicio.

![signup](https://user-images.githubusercontent.com/32868919/38169501-bbe44b2c-3528-11e8-95f1-5fc6e5a2e2f8.png)

![terms_selected](https://user-images.githubusercontent.com/32868919/38169506-dcacbd1c-3528-11e8-96ab-8ff14bfc0890.png)

  - Realizado lo anterior, sólo se deberá mostrar una vista al usuario que le indique que ha concluido con el registro exitosamente.

![final_screen](https://user-images.githubusercontent.com/32868919/38169511-f9b35ee8-3528-11e8-8ea7-1d20759a67de.png)

2. En el caso de optar por el botón de **LOG IN**, se despliega la siguiente información:

  - Cuando el usuario no llena un campo y presiona **Next** el mensaje de alerta se muestra.
  
![1_login](https://user-images.githubusercontent.com/32868919/38169602-b915aa14-352b-11e8-9c65-34080be07481.png)

![login_final](https://user-images.githubusercontent.com/32868919/38169603-badb2252-352b-11e8-95bf-c5568249c96e.png)

## Desarrollado para y con:

[Laboratoria](http://laboratoria.la)
