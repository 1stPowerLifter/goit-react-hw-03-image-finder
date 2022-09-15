import { Dna } from 'react-loader-spinner';

export const Loader = () => {
    return (
        <Dna
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />
    )
}
