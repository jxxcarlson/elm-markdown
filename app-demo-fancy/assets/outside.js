// OUTSIDE

app.ports.infoForOutside.subscribe(msg => {

    console.log("app.ports.infoForOutside")

    switch(msg.tag) {

        case "AskForClipBoard":
        console.log("AskForClipBoard")

        navigator.clipboard.readText()
          .then(text => {
            console.log('Clipboard (outside):', text);
            app.ports.infoForElm.send({tag: "GotClipboard", data:  text})
          })
          .catch(err => {
            console.error('Failed to read clipboard: ', err);
          });


        break;

    }

})


