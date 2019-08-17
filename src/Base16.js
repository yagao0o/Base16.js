class Base16 {
    static get CharactersToBinaryTable() {
        return {
            "0" : "0000",
            "1" : "0001",
            "2" : "0010",
            "3" : "0011",
            "4" : "0100",
            "5" : "0101",
            "6" : "0110",
            "7" : "0111",
            "8" : "1000",
            "9" : "1001",
            "a" : "1010",
            "b" : "1011",
            "c" : "1100",
            "d" : "1101",
            "e" : "1110",
            "f" : "1111"
        };
    }

    static get BinaryToCharactersTable() {
        return {
            "0000" : "0",
            "0001" : "1",
            "0010" : "2",
            "0011" : "3",
            "0100" : "4",
            "0101" : "5",
            "0110" : "6",
            "0111" : "7",
            "1000" : "8",
            "1001" : "9",
            "1010" : "a",
            "1011" : "b",
            "1100" : "c",
            "1101" : "d",
            "1110" : "e",
            "1111" : "f"
        };
    }

    static CharacterToBinary(character) {
        let ascii = character.charCodeAt();
        ascii = ascii.toString(2);

        while (ascii.length !== 8) {
            ascii = ("0" + ascii);
        }
        let chunks = ascii.match(/(.|[\r\n]){1,4}/g);
        return chunks;
    }

    static Encode(string) {
        let characters = string.split("");
        let chunks = [];
        for (let i = 0; i < characters.length; i++) {
            let temp = this.CharacterToBinary(characters[i]);
            chunks.push(temp[0], temp[1]);
        }
        let result = "";
        for (let i = 0; i < chunks.length; i++) {
            result += this.BinaryToCharactersTable[chunks[i]];
        }
        return result;
    }

    static Decode(string) {
        if (string.length % 2 === 1) {
            return false;
        }
        let characters = string.split("");
        let chunks = [];
        for (let i = 0; i < characters.length; i++) {
            chunks.push(this.CharactersToBinaryTable[characters[i]]);
        }
        let result = "";
        for (let i = 0; i < chunks.length; i += 2) {
            let bin = chunks[i] + chunks[i + 1];
            let code = parseInt(bin, 2);
            result += String.fromCharCode(code);
        }
        return result;
    }
}

module.exports = Base16;