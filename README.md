# Rest-api README
## Endpointit
```
localhost:3000/transactions
```
näyttää kaikki transactionit
```
localhost:3000/transactions/:id
```
voit hakea tietyn transactionin id:n perusteellas
## Esimerkkipyyntö
```
{
	"SP_ID": 1,
	"Rahanarvo":20
}
```
## Esimerkki vastaus
```
{
        "messsage":"success",
        "status": "200"
                        
}
```
## Errorin esimerkki vastaus
```
bad request
```