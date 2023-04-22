import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { isValidLocationState } from '../utils/utilities'

//hooksはuseという名前で始まる
//useeffectとかは本当はfunctionの中では使えないけど、useをつけてhooks化すれば使える
const useCheckLocationState = (locationState) => {
    const navigate = useNavigate()

    //error handling
    useEffect(() => {
        if (!isValidLocationState(locationState)) {
            navigate('/')
            return
        }
    }, [navigate, locationState])
    //初回のみでいいんだけど、warningがでるから
}

export { useCheckLocationState }

//上記はこれと同じことをしている
//isValidLocationStateはこの部分
//location.state === null ||
//location.state.countCorrectAnswer === null ||
//location.state.howManyQue === null


 // useEffect(() => {
    //     if (
    //         //typeofはnullを判定できない
    //         location.state === null ||
    //         location.state.countCorrectAnswer === null ||
    //         location.state.howManyQue === null
    //     ) {
    //         navigate('/')
    //         return
    //     }
    // }, [navigate, location])