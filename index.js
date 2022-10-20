// RELEASE 0
class Book {
  #price
  constructor (title, pages, category, price){
    this.title = title;
    this.pages = pages;
    this.category = category;
    this.#price = price;
  }

  get price(){
    return this.#price
  }
}

class Fiction extends Book{
  #price
  constructor(title, pagesCount, price, category = "Fiction"){
    this.title = title;
    this.pagesCount = pagesCount;
    this.#price = price * 500
    this.category = category
  }

  get price(){
    this.#price = price
  }

  showQuote(){
    return "Imagination takes you every where"
  }
}

class Language extends Book{
  #price
  constructor(title, pagesCount, price, category = "Language"){
    this.title = title;
    this.pagesCount = pagesCount;
    this.#price = price * 1000
    this.category = category
  }

  get price(){
    this.#price = price
  }

  showQuote(){
    return "communication is the key"
  }
}

class Engineering extends Book{
  #price
  constructor(title, pagesCount, price, category = "Engineering"){
    this.title = title;
    this.pagesCount = pagesCount;
    this.#price = price * 500
    this.category = category
  }

  get price(){
    this.#price = price
  }

  showQuote(){
    return "work hard, study hard"
  }
}

// Driver code here
// Hilangkan comment untuk menjalankan kode

// Release 1
class Printer {
  static printBook(data){
    let arr = []
    switch (Object.keys(data)) {
      case "Fiction":
        break;
    
      default:
        console.log("DATA TIDAK DITEMUKAN")
        break;
    }
  }
}

const books = Printer.printBook({
  Fiction: ["Less:100", "Idioms:90", "Harry Potter:300"],
  History: ["Tan Malaka:200"],
  Language: ["English:80", "deutsch:75"],
  Engineering: ["electrical:122", "mechanical:122"]
})
console.log(books)


// Release 2
// const universityLib = new Library("University Lib")
// universityLib.addCollection(books)
// console.log(universityLib)

// Release 3
// universityLib.priceFilter("higher", 76000) // Menampilkan buku dengan harga > 76000
// Books with price higher than 76000
// ===============
// 1. Less:Fiction:150000
// 2. Idioms:Fiction:135000
// 3. Harry Potter:Fiction:450000
// 4. English:Language:80000
// universityLib.priceFilter("lower", 50000) // Oops! There are no books found.