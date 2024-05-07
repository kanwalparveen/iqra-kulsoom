function make_sandwich (item: string []){
    console.log ('/nMaking your sandwich with:');
    item .forEach(element => console.log(" " +element));
    console.log ('Enjoy your sandwich '!);
}
make_sandwich(['Ham','cheese','lettuce',]);

make_sandwich(['Turkey','Bacon',]);

make_sandwich(['peanut butter','jelly']);