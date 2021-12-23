import fetch from 'node-fetch';

const getCep = async (cep) => {
    const address = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    console.log(address)
}

getCep("53430315")