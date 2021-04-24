function request({url, ...requestData}) {
    return fetch(`https://cards.danit.com.ua/${url}`, requestData).then(response => response.json())
}

export function login(credentials, onSuccess, onError) {
    request({
        url: 'login',
        method: 'POST',
        body: JSON.stringify(credentials)
    }).then(response => response.status === 'Success' ? onSuccess(response.token) : onError(response.message))
}

export function getVisits(onResponse) {
    request({
        url: 'cards',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    }).then(visits => onResponse(visits))
        .catch((error) => {
            console.error(error);
            onResponse([])
        })
}

export function createVisit(visitData, onResponse) {
    request({
        url: `cards`,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        },
        body: JSON.stringify(visitData)
    }).then(visitData => onResponse(visitData))
        .catch(() => onResponse(null))
}

export function updateVisit(id, visitData, onResponse) {
    request({
        url: `cards/${id}`,
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        },
        body: JSON.stringify(visitData)
    }).then(visitData => onResponse(visitData))
        .catch(() => onResponse(null))
}

export function deleteVisit(id, onResponse) {
    request({
        url: `cards/${id}`,
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
    }).then(() => onResponse())
        .catch(() => onResponse())
}