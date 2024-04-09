import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [
    new Recipe('A test Recipe','this is simply test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505',
      [
        new Ingredient('Meat',1),
        new Ingredient('French fries',20)
      ]),
    new Recipe('Recipe2','Meat','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFRUXFxkaGRcYGRgXGhgYHRcaHhYYGRoaHSggHR8lHR0XITEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGhAQGi0mHyUrLS0vLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLy0tLS0tLS0tLS0tLf/AABEIARAAugMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgADBAIBB//EAEMQAAIBAwMCAwUFBgQEBQUAAAECEQADIQQSMQVBIlFhBhNxgZEyQlKh8BQjscHR4WJygvEHFjOiFZLCw9MkU2Nzk//EABkBAAMBAQEAAAAAAAAAAAAAAAACAwEEBf/EACkRAAICAgICAQQBBQEAAAAAAAABAhEDIRIxBEETIlFxgfBCYaHB0RT/2gAMAwEAAhEDEQA/APi2rtfe+tMv/Dzqos6lZ4bwkdoPn6ULuWJUjzFCbNwqQQYINDQ0XQ+e3fSPcX/eKP3dzxL3we0jE0EVByKbrWrGt6f4zNy3iPMec0m6Xwk2z24rF9Loea5R5e0XTFdKZNaBZxXVnT5qhE5K4ql7aqC3ft6miLWG7VVr+llguYg5HnRRl6BWn3uxaJ28+lFtJdCxunsfhWxtPA8AjAqvKEnEntHfzFPRMIhhMhucfA/3od1voHvRvsmD3X7pMZjyNV6rqIUCVIU9wQYjsR2rdoOsWzycHnHGMRz+hWmCaLj2yVacYz2NWtZW6MHxfD8qeer9MtahNwA3qIkRn9c0pN0/buKgmO3fd2FK0MmChbNnLYb7o/8AUalvXEnvunJH8ax6p7hY753eR/lXMFfQ0lj0Mem60E8IJPqcH1+FWv1Y4MYPl+uKVi/nV9i8JprM4jIdYSBI3D5/0rVaAYTjHaeKBJq2WCrAx8K7ua0EgZQ8kz4foOK2xaDUg4OD27Y+IrFrdNiSMcD1+VUXtYRBn0kEGtNm/gT4p45oewWhd1ekIMise0006y0ImKFNp/SpFTcs0E19na5HnkfA0x2I71i6/aBUOOVwfgf7/wAaZmI1ex/UNj7SYBBB78+netXXenlH3DseRwfhSro7pVgQac7Nz3trJ7VHI6R1YtnOnyB3FaIAqroolCp5U/keP51suWKtF2rOaceMmj21cArjW3cAk4kCu7enri/pwykTTomz06gbfhA+p7xWfWoXWVkMDjy/M13YdSA0jyb4cGPUGuVue7Jg5iQDEOPMfLt6HyrRRc1d+4vheCD6/wBKq6frtgiJjPxHl9KN6+wlwZwwzj9RSleBViKV6HWx36X7R7R2JBx6enn/ALUa12hF9d6sUJz4c8jBIHzr530yVBeOcAxgfWtug6zcQ7gxnHBitTFcfsFNZ0LaAWUs3JuTj4Dyode6cCSM5+fy/vTT072ittlwQT35BHqMZn+FXXtJZveK1cCHGORn8x2raRltHz+50xhjmqf2I/Py/p5073+lXlO02i6n7yDdn5Vmv6AL9sFcdwZms4jchTtWo5z6dwfWrfcEKZnPfzrff0TzuU5OARWrT3VHhuj03Yz8qygsD2LwQEMAR5Zz/Stmg1yTHY+fP961avo/3gQQcyMj4UF1Wm2N/OjaDTGFl35B/j8qylB5D61hbXe6C43MVnnAB49T/eqT1u7/AIP/ACillQ0bCtnUCMiu9iuCPOuUQcGrE0+cVoCxqbJtuVPI/MdjTD7NXC3hms/WNCxG7uo+o/tVHs1ei6vqYqU42i+KVMZ9Inu75U8MPzosyd63+0/Q4tJft5IzjiRz+vWlrrPUvd2NwOWwPj3rMOk4s3yFbUkY+se0CodqiSKBW7mqvzsDEd4wPqaFM05NaG1jkBQSFHAGPjMVWznoIaJ7tl9twEKTnvn4jzq/qXUFIADHB8Pof6GgLOTyTXNHIOIQv9TZ1CsBjvVOj0puPHblj5DuazAUdsBbahCRLCWPkew+A9aFvsHop6hcEwB4Rj51hPM/r/aiuoCss8jtzkgc+VDpjnI8s59c1rMR0WOACfjmB6Vfpda6MCCe2Sfpx86y2mOcT6ny/hV10FgO3r64zj1oNGjS+0LohBM8nsOTk/7edUWPaQyd43Kex49OaW9PqIJByK36HQbirGY/hFbbFaQ1Cx+794gBnJWZK1jYWyc+Fo4PEdyR3rb09XtAEExzMmPh5Vq6n01bi+8QDaTJjsYEx3pxABadQTBBX9fSuNZolOYnEx3gZgT51vOhxABgfL61Sun2eJ2meFk89qw0Wx02/fO8LtXsW8I29ors+zV//D9T/SjlzXQSIEj6x5TVn/iA8/19KXihuTKLVqa127MUMtX6I27mKxMZouKelJ962LV9hMAN28jkflTeNSIil/2i0RY+9TOIYd8cGskrRsXTCz+2Nz3Yti5cYAYUtg/EHFLXVNabgyIg/L/eiXsVp7D3QL43J+GYHxPnRz/iD0jTIu+wFUYjbAmBnHPrmp8N2UeXXE+f0++zPSVTTC48BnaRiTt8vSkvp2lN26iD7xz6DufpX1vFqzIUFYNtZ5nzFMIfN/aTRgPuURPb+dBIpn6qxd/y+VcnRLgHCgSxjn0+NaYBel6hUeWEis11ySc1o1+l2HHH8KyUWFFiXiO9XG8D8ay1KLCjbbaDEfn9PjRJrkgGAeZHl2E96BKaM6DUDaVOS2eJHr2pkzGjLb00OCBIJpu6dbgx2McfPgj4UH0zkcgEHj5Vve2YMcjOIOPnWoVs1azWBQQJKnykgGfInH50U6FrVxmVjgjvH+5nvHnSs+p2EmRGJGYPygHOKv0uoVfFk8YHYzMD5U1i0EOv6wad4YSDkAcAH9cfClvUdXEkZg/PHaB/I0ydc037Tpd4+2g3D5crAHl+dfPy5pZMaKNWo1TbvtTVPvm86qrrfSWPQwKK1WieKq04k0QVQKyhrR5ZScVs0+lis0eVdftrLzWpmNAPqPSHt6iFO1Hkgj/uHy/pRDSaa2sh0W9PJfJ+AbkfKKu6pq1uXLUdlcn57QP51WG4jny7/KtFL+idOt2rhuJJJEBDG5ZIkg/eEek0we0+pVbNmypG0Lv8JnngfSgGpT3cftDrYxO1pNyO3gWSJ8yBWHUe1VtcWrIY/jugMT/pMqR8prGjbPdJaLv4ULH8Kgk+nFEG6LqT42slT2D7bUf/ANCv50u6v2r1dwbfe7V/CgCr9BxQm5qHYyWJPxoDY1ar2bvMDmyPjqNP/wDJQ7/lLVHgWT8NRpj/AO5QQ3W8z9aguHzP1o0GwtqPZXXJzprpHMopuL/5kkfnQi4hUkMCCOQRBHyq2xrLiGUdlPmCR/Ciq+1eqI23HF9fw3lW8PlvBI+RFAbAdatC/iAmPX+dFDrNDe/6lhtOxnx2GLrPmbVw8eisK8u+zTsC+lddUgzFufeKP8Vk+L1ldwAHNCAKWtMCMAr5YBiJ/jzWiyoUkkQwxkY+U+dL/TeouoK5MYIyIE9vWjC9VMbXX4EQB+uTAqiZNoHdVQDcBgEztwYnuPLjisXSnY3AsTNHdbZVgYAP64nMd6F2LYmQIg588Z/XyrGjUxi0Wre3AfxIwPaIniPhn5UA6t7O3AWuWwGQ+LaPtKOeO4HmK1XeqCJ3GDyCIzPMx8+MVkse0TIRjftMr2ieQIHBodArAaivIrfecO7Odq7iTAxBPNUwvn/GloexgtVqBqi2K0gUGHqPVt5JHFVqtD+o9aFvwplvxeXw/rWgX3ktWyXvPGABbX7R85MGDniPiRQy97TXRIsxZHEpO8jPLkkg5PEUHvXWYyxk1XS2bR6zEkkmScknua8r0CmT2I6Jb1F+bx/dLyMgufwg9vnFJKSirHhBydIWqlfXLmn0iuEt6U3WVT4UQ8fiYmO3cYOaUOv9BRiGtMi3CpY2RjjkAfi9O+DiYqSz7+pUdD8V1cXYpVK62GunsMBJBiYntPlPnxVzmpldSpUoMJVli8yEMjFSOCDBHzqupQAwWuupeIGrUs3Avpi6PVu1wf5pPkRWy5oSq7lK3bTcXVnBkwCv3D6ceRNKdbul9UuWGlDg4ZTlWHcEGmTFaDmqXwwWAYH7QOG9P7VnNkKhZiJY9vKJ/oPnV/ukvD3lgwBl7X3k5O5Dyy+Y5HORMYOpXwx2geEAD4nvTWLRi114MYBwOBxFZrSyfSu3t/E+tbei6cMxYiQo/Ol7Y/SKtLpixjgedbRateZ/Ki2otWlUSIPYA0Ja1/gX6imoS7NqXxWyyZrDtFca7Ui2hWZJ5Hr2T4DBPyFIOe9W6sFG1OSOfTz/AKfWlsma9diTJya8FYaeV0qE9qI6Pp25N32pBPhglQv4hOJkR/Om/wBmfZkKwa5t3uxFu07bCVAJDMBJGQMSJAInMVOeVQ7OjF48sgj2LAIJM/ITHxpj0PU7Ytfs96VhgRCmY2kASDMmYyMSe9Huv+yWnt2XNqbjLBBtsV8GVBKMDMMMwZx8aSrerVQGli8RiI+O48fCO3riSksnR0/G8S3r/Y3aL2g2Wrlq5fd2e2QgMDazREllndx4pAGe3IjT3L73GYgFjtA3Ddu8QAUEH5mOYoPeYup3qxblTMmOSSO/mTW/purO9dqpbckbW3FUHAkycRz86SUWkPDIpOuhl/5fm+9x0924AhdocFgYdxDRjseJHIq3R+ziNdW21wM2GCuNoG3DB1LZ2qB8ZzOaxWtQ1pwoF0MwLMSNtmS32ralQApEgHzg+lVe0nWgl5LuncuyrDEidueB/h/Oue58vjs6HGCj8g6j2T0oRjb09u/cVYZVVAoxPJ5JyQV7fWk/209j7a/vtNbe2pWfdnIPE7MkjmYPlXbf8QL14BbdiLkGSD38I+6B4QFjacZyaq11zVMu33hDMs+EM5GWLAlRE+vkAQRWRjlhNW6Eax5IPVuvS/2KfSejvecjO1RLniB+iPqKdU9krGnSbiliYbfcBQBY7BgByY70BTVoNM1oXcCTG0gs2JYspBPoCeQtGtN7V6u4+69cYmztVbpQAbSZUPbKgmf8wiZFdUpSav0c2PHBNRrb9mLqvscHQXNNLMftKCGWIOVgfKku7bKmGBBHY4r6npetkRdZieWc2l2q+1jkSAFJG0RwRK9qVvb7qljUOr20AYgHcuNwPZhjOB+skw5J8uLWjPJwRS5RYsaPVPbcOhIYdxRjUWVur760P86Y8J/EAOF8x2544A1p6frGtOGX5jzHka7Ezz2ju4+IWY7+tFfZ2ySGj+3HeqL2kUEMh/dvkeh7ofhiPj6GjfQtGUBmR60yFbK7/Si4OJbkE4kehNYT0U+n/dTlYYCJAP6/QqwMPwD609CWJW+Bu7jjyn19BzQLV397T27Vu6jeIXaPh/X+n1oWFqJY9S2WMAEnyAmtmi0YbuTxAUEydpJ9MRxye1c6fTOY2qQQR4p2wT9nJwPOSfWrLbNJG6Dkme5758/X1pJM6MWPdsZdA1tdMFAVgG3MS0OGmJXOBG3n+VEbvU7Ft9yod55uru2hghBwPCVktOO1LdgWnYpbiZIWW27h4zyccbRByZoyr6e57sWHSw6iCDhRtGfeFjB4PIz61xTT5W7PSjJcUkjqx1m8kxbDpcnGRcCkmCh+0FndEetB/avp1q0ttrYYMxfeDgAGDb8MYaN09sA96btT+zKttDeezuh32m2V3tEssCVEAiBH3RxSr7QXLDXStp2dZiXgkkwZkHPHy+dGN1NOIZYOUGpfoD6AX2xbD5wSAx7gdhJ7YFOHsn0O89lz7t2u7gbdrctsnwzumVcRI8gQTFauh6ixZKG3c92GEOrgQWmLZMLMAE5nup5kBk6Nq0VjeDAoFIeJjMjb6n7JwZAJoyZm3UUZjwcFcmIHtZpuoGLuqDmZVcq4hRLSVJ4EfnnFANF7y4Pd2wzMeFUEknvx6Zr651HqS6i3cSyg9z4u0ZCysA5EzB9T50lXOgItxSzOiH7ZtbVcrGVXMHtyAeZGM7hy2uMlTEz45L64u0LCC5acrBt3VaC0xHxjH8s059P0N6/buMdWUs27Z3XT98BdzKqbvTbiBPJBEFf1b6dnZvdu0mY+0wA4kKQizjz+Aoh7KXVdnsxcXejIqlgNykCVLEASPA3HZc1ea1dHnfLOLqLoVLWpZWUsNwU7trTB+PfNMGl6yXQ2DcVEIkEiNsZAnk+Qk9uaI9Y9mrt7cxNtbqvtMHG0DkngR6eVJmpQKxUNugxPYn09K2o5C9zw99MP9V60JTa73CAd5gIGYjyyMDb8Y7Uu3b7N9ok/Gud3ajehT3loKw37B4F27QCZLbisEk+Z7RmmSjjRNuWaWgFUolqumsBvKNbHEENlhggHzkUOYRiqJ2RlFx7CHTL0g2mOGyp8mHH6/rV1nrN1DDZg5/OaEqxBBHIrd1JdwW4PvCD/AJh+vypkxKCb+0pPI/Xeqh7RN5H6n+tAqlbyYcUauoXJePKF+nP5zVVlWJ2jk4/pXpkDcY8QPx559K1dG2B9zrIH8ew+efPipzlSbLY48pJDB0bpOruWxaAtr4sbx4pOCsxMRJjz9aPaj/h7ecEuylvCSV3bogjbER5GeRisGh9o0tsWtu7hwQ6mUGR4VEfe5yRGO1NXSOt7ArA7PAfA+2WlhhZJXjt4fyrz5zyd9HrRxY64rf8AP7Hy/W9F1GnUXDBQ/fQyBJKwT8iKyL1Btu3B9Yz9a+w67oa6rTEb2s79590yypbBVkZRIEqPCSYAPcCvm1r2SY2rrF4e2YAHiVzALDcMDaDzJk4A710Yskcq2cebHPE6h0Bl1ZzmSRBJzI7D0itmi6Q7K1wr+7Vd7GQITdtxPJnEDMkVwOjPJUzuHMDcFgiSxEwInImmdOnaqDZ23PAkki01xlBWVVmXIUg5xAgCDFUk1WjMacn9foE6PqKtttkyoMBYiRM/aGZ+MxXGq1Vl3ubgUG2FCsQJUdwwPi+Q7+lD9Rp72luAsroYDIWQruGCCA3bv9KwljMz86VYUnY0vJcltBrU6uFRrIYKBBInJA7wYmJ7DGe9d6HXX7m5Ll59u04wxInie2e9CtDrNkyTtIhlBjcPpj41u/bbKMpXdtfNwRJXBG1CTJGTyc48qyUPVfs2OVOm3r7DL0B7NondFvaNwIBuM0kf9T3YwBwQfOu9XYum4jL+/VHLRb94r2uNyqQYkAghjB8IzigXSPaT3TZUm2TJWASfQkQePKAa0dP6/cVbrhQqG4G8KbRBBASVjGBj0nzlUpxHyLFkpfxBDquuZlvNi7ZYBg20puIJySoEHAwDyT8Ao2OnvfLtZtNAIECSq7jCgsTicxPlRfqXULl0MLisqMZ3AbFMxtDSIAPhyZI54rFotC9p1dlIBYKrHjInd6+EyOQaaL4pshw5OMF0hh6Z7FNn3xSQDNsZOD4hOCDg8TGKKf8ALCeG3ct7Nv2WDKtx+RwshsCRugkggDkUS6D1pINpYdxucm4EUAFlJ3ZmOMghuTng9dY6zYuOJcXnQkFlEKrBmKgAiNpBbzA2mScE8U8mRs9LFjxr1+xe6tZ06IVDeBSsrvJP2VgBSsRkMTu4J9BSXrNEZZlU7OZPEf5uDX0vU6m2qMm+RGS4IndBKiFgYORMiYjkV886kHSLCklPujzk8SPtZn6n1ro8bI3o5vMxxq/QIojpDutOkZHiHr+uKHsINaumXIuD1xXceSZKlGL2jAmOJP07Vm9xQBmZ1I+zn0wI+HnWjVWGsgDd4mALKPu4BUE8znI7R3r3pVkOwWAZZcdzn7I+Pn8KYfaTSFhO0L4RG5CnhAJG1u5C7ZBJwBBaJpLV0XUJOPJCx+1n1PHfBjij+k9ow5X9oQXSo2jfATbiFwAQBHn37UsMpBg1JrJY4yCHkTix3brzizAZktfdVXMGREBSTC+Y9KPdI1yX7At+6u3VWNyrLCWJz3K+IqNwjzIr5ro0a46ooLMxAAEmT2AFfRtHoTbQW0uOn2iWGFbbgqFI7ETOcHkEVxZILF12engyfKthLo2j06owXhvtQZZoEGMblEE+onmQKiaC+rpbsOirbKs1i47W92TtYOxIDKWOJEEDBINY7fTmuMAj7XtzDZgwRgMkkQCxnAxyOar6jcu2lZ77G5mBtVo2gQGJMFSD930+sY5JLa2dTxxlp6F7r+h1Ts9l9z7XMsTvFtgzTuuESRDHkyccwKWrXS7pYqBJAnGRHrHHzivp+m6pbvEsiEQR7yR4HIUkblYnP2jJHBPxrteoaf3gtLcCMsRsbYGJI8BIMY8QGJH5npjnklVHFPxIyld1+D5UdBd2lwhKjJYCQBMDd5Z8661t3eA2yCoAYqAq+mFAAPPxr62LyE+O3beeFYKPCdxMsvAIAweZg4rH1PQaTJ09lZ27mUs7JtJhnKkkCMfdI8U4ABqkfITeyEvDlFOtnycEj+P51rt9Wuqhtz4G5UgGY4yRIpr13QdqNqCoAYGCAmySJXaFG0eGfCMGuPZW5Ze8llraqBbZWJAbeTuh1U/4YHlycTTfLCabSuifxZMckm6sXumE3iLTsQGYZyfOBABOTHANGruvPurukuXmDb2AUqu2QBtkEjYSQQTnLHjO5g1ns9bsrcuWN1l7ZIMkpvUxCjODyQc9vKkHqti4bhb3ZXvA+7mBPcZ8/MedJCUcj0XyQnihvb+5Tpy4LIASzAiOSI8wQe0+RFXJrMNbdsQSCFmXgQD6etdbmdQZPvVxJzuEeEYzuzGcGOZwRrggkEQRyD2Per8b7OP5HFaZe+scqF3HaMgdp86KdM6U15CwJAWCC0RBMMZnsfIGi3QL9gWxdNtB7sSVKht7qQQxkjEFgQMH8qotO9m7tuDapDMyKUACMSVQFjjmY5jAzmlm0gxZfq+p6AfWdLcS5+8iT3iJjEkeZrHpz4l+Iox17VlgsqwnKzMBJO3b+c/0oKgyPjVIu0JlSUnQzkSvHY/xNZPc1oU4j1r2G860mBOmW7Zb94WVQCSUG5uMAAkD+002aO/pGtErbCsyhSGclVJXLrIbnMyPCdoEd1DRPBYBQSRAmSR5x24nmiXSraqTdbhYgcbjPbHapZHWzt8fqgw/Q0vKHIBuXAZIZgA+6JUQd5yJg57VkPsXfBzBGYgwSewyMGe0fPvTO2utXSvuhcQhRClSWLHxSZ5iAcRieas95d3JbZhbVWBE2wTuMcqHOQATIJ3YBia53mnT9HUvGxN9WLjdBu2LQgjfgsBAYAEmAOWIEn8s4rv/AMY4ZXYqIDBgIgc4Ecgzjzpg67q9x2KLjgL9tgque7GE4AMxJnzNfMbsqxWTgmsgvmb5dobLNeOlw6f+GfRl9qtOFdfGjEwILYgeQGc4+1HpFC/abq4NqbRlWMFiwLscE71wSMnJHmO1JpuEx6VxJqv/AJo2m/RzS82VNfc+gWdVcbTEkh1DIwWIBxBhtsHIifSK3avpVnUoTa3AsoZjtcgNJ2ww8zuEwRK/VHPXbpQBmM8eQAERtAwDMknv9ZlvqN1c2blxSDMAndxnIzAP8aSOKUWVfkRlGhn6QbtpyGK3Dt2lVBkpIJUGIzzIOSBV+s9o7xfbZErajduVJbbu2qRweWB85XE5pLudVuGGLktOPrJn1nv/AEot00XUcl1urdaTuYAZ8/EucYjHIzFEsX9TCOdP6UddQ606sVIZArmQGKyOGWAPDjmIOePIdp9SX3hSZLAW5MlQTtAwMQhIxA4xisfUkbexksJMH0nk/wA666feOAQu0c/ZViD9oBokmDiZ4rojBKFI4Ms259l+hvXLjAC4dx/GzFT2gnsOM/DIiiHWrhui3d2kEsVhmziMTgAcH6+lYeo9NuWCjA7rbglLg7wcgjlWEiQflNXaC+HQWmCp4wy3DuhSSBLcnaM8A/XFTkrakjowTiouD9mHWaW7aaWG0gxypyIPE8ZBB4Pam/2c0j351GptbjbSQxSJUKYDADxkyIxPGRisPum0+5rxlmB8R4bwyBvOTOBtjNe2vasx4Le0cQh8QwTKyp2x+ePLCybmqiv2a4Rxybb2NFy/pNQouWraWrigAqAbRZohleRtG7cByecTQO1029cM3bfu1GQd5BBLFpaAWckz4cDxedTS9atnf71f3++SGBUMQigZWfF4ZjA9e9NUs4a6VW0C0tcDypbjiQZ+z2I9alOTxukGLEs1Sk9/zs+ZddsMPESApiJMlxmGHpyMcRxQuwkuo82A/Omr2zsibcukqVVl3Ddledo7YgmB28xS/pUHv/CPCCzDvhQSM/KuvDLlFMh5MeM2EkfM+v8AavWu+lc2WEfL+dclKqc4M11n3d5gOA0j4HK/lFGOnC2qu91AZVdnMLJneY9I8/hQ3Xkvbt3O6/u2+WUP0kf6axm85k5wIPkB2FTyQci+LIodjj0rVrdUsHVCIXxkzG0CbYLc+cniDjgW2b4tOwabkhYNzlgO8hhEHHMwTxSZpdYUPAOIyJjIyPX1rttczQCcTyZJFQlgZ2R8tabHT9pDglyVJBHvATB58/4mku/o2MlAWG4iY8vUekGuL+rcgruxPAmPjFXaTXbFggkidviIAnjA8juMev1bFieO2JnzRy/SYBWrS25nFVom4ycf70w9M6etu3cvwzL4goJjCkEh4GSRGOPnxTJNRRHx8TcutGJ/Zy7tDqVM8LMNJExkbSdoJgHgVWrXbIINra07dxXz7buO3b1oj0+GdLouBGG4sxkgM32VtqByMj+FN+p6q5a0ArsihRuZCUYmN4IE7V8R7T554jPJLqrOjFgi1zTrevx9xB0fSbl29sdTbJBJ8IBwCZCmPL5xTRo7crt1H7Q20gqoBLsAFDKoIkAQxJjsI7kk/aLQ2mvD/wCpQXNo2kD3gUEGVfMnxSQW9cEmSA0mp/egXNodGbcXwpY48R5Ak89hGKSU5TVHRjxQxyuxs6x1PRlLZFq3uIVyxB3NiR4SYH3Tn05BFfNrygsbqqtsbpRRJbBPC5Akg84+NMvU9Dowm5bwNwhgFE7N+0lgWOCATEADtnmlO/duWm2kFR3EsJg/imY479h3FUw40ujk8ybdKgrZQooUswRhO0iCFiTj70ywMwZA7RXHUEa4w2qTuCBVgnYp+wBBMRBxJ/KvD1wXgFvooURm2NtzAONzSMk5mjXs31W3aVi6ohIMMAYtz9h59GkEAcEzmabI+KIY8fJ7/JrTptzatlRucqSzEAhjtJO4sYAnvzA48hfXuhXLdzabWxvuNaXcpEdys5mPzg056Pr9prQR9k7iyuGC9vupxI8U/wCYQCIpc1/tGd6WVh9wChlkbTuPiIOD58KMdq58bmmejmUJR2xWVC6qjuA7EhSe4nktxBac84rrSa33RO+4WIO1kiRjkhjI8xxME117QNbusWtHcRA4AlQBlQPNtzfOgSia6ormrZ5zbxS0ENbrzcAG0QDg94AgCfKKs6TbxcbvCovxY/0B+tY79oqQucczxJ/tFEQPd20XvBdvIFhif9IGPM1SKUVolkm5O5G79o02yE33HOJIIVR28s/WvAh/QoRork4Ioj7z0oSomlRk0pUsyMYW4Ik8K3Kn6gfImstu2wLWz4TIVhj8Q+WCBU1TQqjufEfTyH0rVqB762Lwy6Qt0dyOFuf+kn4edMMgfe05WfQwa8TTsRIH6if4UwWtIty2gy1xvvCWIEkmQWifMfE4zVC6RlDod2CJwsLMSWOcDiJHr3FS+RHQsDZn6T0x7jEqIUAyxGAIyYkT8Ke+leyPT2suzPcZkPOFJ9AMjyxk59RWTpPUSn7y6HKswUFyoJDcuAwwM5bHpTVf6zZGmVbb6dckqGBKgNO/Y4YAkkk9vh5cObJOWrr8HpYcOOOu/wAiXqvZ+zbk/vlMeFTtLE8ThcDvHOCO4NDtB15E97bdB7pkZQkTEkkRORBPYinH2i6E6hC1wb9oB3OGBwYhgPDj7pHceYr5hrbRVyHECTA5+U+VVxfU6kJnnwjyh7Gjo3UmuIytYW5aUSEWNy5iYKmfOBHNXXPaI202ad9kwXJ8TP5kk4B7R6fClN9cIVQgAXM9ycTPpjipo+pNa3BeHEMCcN8fz+tUeG/+El5Sj+fuGuo9TIum4GVi0+UD8P2TkiZnzArF1W5K23CQQIZhMN+H0kL+sVn6R067feLaA8SSVUD/AFMQAKPdR9l9SqlnAVIkHdKMVEbVZdyk5845zWUsbNUpZov/AAL+qsKqo24MzCTt+6cQCI5qg3HcbCJiYEZHcgRn5cZNb+n9H3hj75Lcdn3iR5yFI+Uye1WfsFwhQLbLmGeI5M+OTAHcExNVUkvZzywyfao46cwKIqm0jTJeSGABzvJwBkHGOO81mOoUJAM7TIO1RlgARkHco7A/zq3U6drV021RbhQSWAFwEecZUCDB+FejS+8YMAfE8N4CFtqCBJKiIjmnbIKBvs9QtlDbdmVGhiigsCYHGcZwDmI+Fb7thbdqEgPeXbaWQze7YQ9xowC0lB8X9DQzqCpYu+6zCztII4Y/igyv2u2DjzNesz3bm4XFJyAd0eUBZVQABACjAiBAxXPWrXR1xt6a/sd9L6XtI94CD93gbQZy0/l8fKuFSzHjdmPdVECckSRx284j0mqNXq3uMqA58ILbgBjC5gAQPrmh+qs7H27g5xlTuBJ7DziY+M00VJ7bMlKMdJGizaF28zH/AKYJZojCDgfEmF+JqjWXDcefiT/T+VbtQPdKLAPjZh7yPxfdT/T39Zog1opb92TCsAYAEg8nPJq0pcaRwSdsE6azHpV+31qXNK44II+n64rz95+A/Qf1rbNoEXWnP69K70OrNpwwgxyDkMDhlPoRiqn7VxTGDBBtldRpidm4xOSjRm235we4zzRka1NnDi+ymGJEEFNr2yGEbBk+WMRzSl07Xm0TjcrCHQ8MPL0Pke1MWq19wIlyy25BA3MfFbzKo6/ZBBMgxE5EE1LJFvo6cOVLTAf7UxO1nO3gzmB3x5ZNe6C+tp5aSgJKmOSDhhNENd0OXYWiXMAj7OR3giAckcUGv37j7bZztwB68ViSkqQ0nKLt/oZNZ1221tdjS0jfvBY7cwgYnAnsByeeKB9Qv7uVgyeZn0BmsgOwyIJGPP5+VaLiO7AkGTnbB49PMUqxqLtFPmlOLT7MbIcTiRj4VfprUkQoY/OrLOguXSdiliBJ+FdaAuhLDG05Bx348+1Uk9aIQgudSWhl6ZZuaQWriv8AbAYwGO2SRBEdoBPPAwafNTpnNtXZkNxxuKAjwHcSqkKACcAwACRuPlSNa9p7dy37q5vTaQ1tvCQjDcSCoWIJJmFmtHXOsLcIcuYIgqNwDiMMJgCZIJGfynjlF9SR60Gq+l6QY65qdNsL/s9rdszsQbGMGXO0A7gxGMTB86C+zJZnUC4WWV95uJI2jbtAEzO0RAFZLF5kO4n9xcJVd4+6T4snGOOc1kv682NQDafaAJEQB5EMODjt60qi2uNmynGLT/Qw+1HS9jDVWWW2rFgpBC7gmCduDkFTHOTjieOgM7kkn3bMuE2qQ4ImTuO0CAZBAjw+eAPXS29XBVlgwoBETykFicCIIPEE1cvULCWd3uibniUMWJKmPshJ4gyGIncJk9qpOk/ZzudScXVFPUdEdj23ILhdyFwQwAkkL4u+cHy84oDY07yudstGTEHHPl2ojoNYTcJJPAiSGPzLfGiXU+oqVIJZmzJYBcGcRtxMkzJ548qwuNo5ZpS+sw37du0hG4XGaecgNkE+R7GY5x2NZrVoWk3vO8ibY8lP3z/IfPynSdILCi5fzcgbLLSYBEq10dljITk8mB9oNqdQzsWYkk8k8k1ZRo55zt6LEu+KTPYz3nvRVNW9199yBjEetBLTgEE5g8enembRX7KW2Mm3dnwtJgDbkAd/9vWknr0Rumei4MDET/GtYahWhuZ5kYraLiUFRSNeV6a8qpMla+ndQey+5CPIqRuVh3VlOCPSslSgBn03ur202iFec6ZiQD/+lyY/0MQZ4ms93pSF2UMyuWwCNpQTw6kTu+f9wINGNN10lQmoQX0HBYkXEH+C4M/Jtw9KRx+2isctaltHp6S6OWEMFz+GfPw+ncUe6XqLTuty7sBWRsZNw7CTMAjmRg45qrQbLilLGoDA5FrUFbTg+Suf3bTnup4xV3UAdwGqS9ZafC5kKDGWXsxOCYMSJnJqM1L2dmGeL17J1rWo7btE5tlgA1q2hVWYTkhQB3eOTFKNy7tJ8z38u8imJyEVRb92xYhNu6AzFpLOSwCnAAPke0CvdfeF77VkKx2rKorLKgAKpA3AEKAIPnk9iL9jZFek9iuXBPiJjueT8aJ6B7ZBLOSREKcLzlSOTjyrJqOmXBJCkqDHnnIjHqD9K40WhZ2gyo8yCY/rVZRTXZyQnOMugzqdYlpim1biN+Jcdo2+In0kmfhWbXai4S19RCkgEnuSPJskYInPAznO/p2mu2WUCytwgy0lTJEgjPHPB7/SprdSzhtyrbVeEYAg+OdoP19IEVFJI63yafoXBqSOI5n4fryrldzGACSewo8/SPeeJLJW32ctsQ+pd4U98L6c1xqDprZl39834LUpbHPLkBm7fZA75q636OKTrTd/go6doLj3GRU95tXxMphUWOWYwqjjLeXfitV/qFuwwZGF6/z7wg7Lbf8A4w2WIx42+Q71h6n167eUW/DatCItWhstyPvEDLN/iYk+tCqZKibk2WX7zOxZiSxJJJySTkknuSa4ryukrRTyK3pbblSD6HyqhVj8q3Wjgx5UtmtGc3R5EH0z9avW4I/6n/bXBsgyc/qa6Vf8I+orQBoWa8YVYhgGq2M0Ac1KlStMJUqVKAJRTpvtDqrA22r7qv4JlD8bbSp+YoXUoAY7ftOjCL+i09weaBtO0+c2WC/VattdW6eZmxqbU/8A271u5+VyzP8A3Ur1KDeTGu51HQEz7zWCOJt6c+g4YdvSvU6toV3Z1TyZMrp1k/Ehoz5etKdSs4r7DfJL7jHd67YEbLV05k77xz6Qir/Gs1r2juWzNlLdo9mCIzj/AFOGI+UUFqUKKXRjnJ9s167qV68267ce4fNmLfSeKyVKlaKSpUqUASrrCzVNbdNb4rJdDR7Pbg4+X8Kukgd6r1LZHlmop4njNKugl2XJdEGZmflEf7VUz54b6V4TFTd8aYUxmunG351LTxXrGc0AVEVzXe2uWFaB5UqVKAJUqVKAJUqVKAJUqVKAJUqVKAJUqVKAJUqV0BQBAKJ6c4xWAD5/y9KIaMQvpz+vlSSHh2U6n7XwAHz5/nXgbEVxdeTPE5qFsfCmS0K3slw9q8rzdXJoMP/Z',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1)
      ])
    ];

  constructor(private shoppingService: ShoppingListService) {

  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientsToShopping(ingredients:Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

}