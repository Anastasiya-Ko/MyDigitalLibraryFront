import React, {useState} from "react";

const FormNewItem = (props) => {

    const [name, setName] = useState(' ');
    const [lastName, setLastName] = useState(' ');
    const [birthday, setBirthday] = useState(' ');
    const [email, setEmail] = useState(' ');

    const submit = () => {

      if (name.trim() === '' || lastName.trim() === '' || birthday.trim() === '') return;

      props.appendReader(name, lastName, birthday, email);

      setName('');
      setLastName('');
      setBirthday('');
      setEmail('');

    }

    return (
        <div className="mt-3">
            <form>
                <div className="mb-3">
                    <label className='from-label'>Имя</label>
                    <input
                        className='form-control'
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className='from-label'>Фамилия</label>
                    <input
                        className='form-control'
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className='from-label'>День рождения</label>
                    <input
                        className='form-control'
                        type='text'
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className='from-label'>Электронная почта</label>
                    <input
                        className='form-control'
                        type='text'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        type='button'
                        className='btn btn-primary'
                        onClick={submit}
                    >
                        Добавить нового читателя
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormNewItem;