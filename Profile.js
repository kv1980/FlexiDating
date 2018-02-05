


/*-------------------------------WINDOW.ONLOAD-------------------------------*/

window.onload = function()
    {
    //----------DOM-REFENTIES------tip: gebruik hiervoor name!----------
        var eFrmProfile = document.frmProfile;
        var eFamilienaam = document.frmProfile.familienaam;
        var eGeboortedatum= document.frmProfile.geboortedatum;
        var eEmail = document.frmProfile.email;
        var eNickname = documetn.frmProfile.nickname;
        var eHaarkleur = document.frmProfile.haarkleur;
        var eOogkleur = document.frmProfile.oogkleur;

    //----------HAARKLEUR INVLOEGEN-------------------------------------
        

    //----------EVENT-HANDLERS------------------------------------------
    eFrmVlucht.addEventListener('submit',function(event)
        {
        event.preventDefault();
        var bValid = valideer(this);
        if(bValid===true)this.submit();
        });
    eRetour.addEventListener('click',function()
        {
        vluchtType(this.value);
        });
    eEnkel.addEventListener('click',function()
        {
        vluchtType(this.value); 
        });
    eVolw.addEventListener('blur',passagierNamen);
    eKind.addEventListener('blur',passagierNamen);
    ePeut.addEventListener('blur',passagierNamen);

    //----------GLOBAAL OBJECT met ALLE VALIDATIEREGELS------------------
    oValidRules = 


