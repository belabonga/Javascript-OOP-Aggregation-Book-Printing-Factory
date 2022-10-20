# Book Printing Factory

## Learning Outcomes

Diharapkan students dapat menguasai:

- Penerapan OOP dan karakteristiknya
- Konsep aggregation di dalam OOP

## Challenge

Sebuah perusahaan percetakan buku memiliki berbagai buku yang dikategorikan dalam 3 jenis, yaitu Fiction, Language, dan Engineering. Masing-masing kategori buku ini memiliki harga per-halaman yang berbeda-beda.

### Release 0

Buatlah class `Book` dengan property berikut:

- `title`
- `pages`
- `category`
- `price` (private)

Book memiliki 3 child class: `Fiction`, `Language`, dan `Engineering`. Adapun spesifikasinya adalah sebagai berikut.

#### `Fiction` class

```text
Fiction {
  title: <bookTitle>,
  pagesCount: <pages>,
  price: < 1500 * pages> (number), // << saat di terminal tidak terlihat
  category: "Fiction"
}

methods:
- showQuote()
  menampilkan "Imagination takes you every where"
```

#### `Language` class

```text
Language {
  title: <bookTitle>,
  pagesCount: <pages>,
  price: < 1000 * pages > (number), // << saat di terminal tidak terlihat
  category: "Language"
}

methods:
- showQuote()
  menampilkan "communication is the key"
```

#### `Engineering` class

```text
Engineering {
  title: <bookTitle>,
  pagesCount: <pages>,
  price: < 500 * pages > (number), // << saat di terminal tidak terlihat
  category: "Engineering"
}

methods:
- showQuote()
  menampilkan "work hard, study hard"
```

### Release 1 - `Printer` class

Buatlah class `Printer` dengan method `printBook()` yang menerima parameter berupa object yang berisi buku apa saja yang ingin dibuat beserta jumlah halamannya.

Method ini akan mengembalikan `array of objects` dari semua buku yang sudah dicetak.

Jika kategori dari buku yang ingin dicetak berada di luar kategori `Fiction`, `Language`, dan `Engineering`, maka buku tersebut tidak akan dicetak.

```javascript
// Driver Code

const books = Printer.printBook({
  Fiction: ["Less:100", "Idioms:90", "Harry Potter:300"],
  History: ["Tan Malaka:200"],
  Language: ["English:80", "deutsch:75"],
  Engineering: ["electrical:122", "mechanical:122"]
})

console.log(books)
// Apakah kita menggunakan instance method atau static method?
```

Output yang diharapkan adalah sebagai berikut:

price tidak terlihat karena private (#)

```sh
[
  Fiction {
    title: 'Less',
    pageCount: 100,
    category: 'Fiction'
  },
  Fiction {
    title: 'Idioms',
    pageCount: 90,
    category: 'Fiction'
  },
  Fiction {
    title: 'Harry Potter',
    pageCount: 300,
    category: 'Fiction'
  },
  Language {
    title: 'English',
    pageCount: 80,
    category: 'Language'
  },
  ...
]
```

### Release 2 - `Library` class

Buatlah class `Library` yang memiliki properti sebagai berikut:

```txt
- name: [string] // nama dari class Library
- collection: [object] // koleksi buku per kategori
```

Buatlah method `addCollection` yang outputnya adalah mengisi properti `collection` pada library dan menerima input array of object books yang sudah dibuat oleh method `printBook`.

```javascript
// Driver Code
const universityLib = new Library("National Library")

universityLib.addCollection(books)

console.log(universityLib)
```

Output di terminal:

```sh
Library {
  name: 'National Library',
  collection: {
    Fiction: [ [Fiction], [Fiction], [Fiction] ],
    Language: [ [Language], [Language] ],
    Engineering: [ [Engineering], [Engineering] ]
  }
}
```

### Release 3 - Price Filtering

Buatlah method `priceFilter` pada class `Library` yang menerima input berupa `option` apakah dia di-filter lebih kecil atau lebih besar dan `price` berupa batasan harga yang ingin di-filter. Method ini bertujuan untuk menampilkan list buku yang sudah di-filter berdasarkan harga.

Params `option` hanya menerima nilai antara `lower` atau `higher`.

```javascript
universityLib.priceFilter("higher", 76000)
```

Output di terminal:

```sh
Books with price higher than 76000
===============
1. Less:Fiction:150000
2. Idioms:Fiction:135000
3. Harry Potter:Fiction:450000
4. English:Language:80000
```

Tampilkan `Oops! There are no books found.` apabila tidak ada satupun buku yang cocok dalam kondisi tersebut.

```javascript
universityLib.priceFilter("lower", 50000)
```

Output di terminal:

```sh
Oops! There are no books found.
```