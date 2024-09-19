export const hasPermission = (user, permission) => {
    return user.access.filter((p) => p.name === permission).length > 0
}

export const formatDuration = (datetime) => {
    const now = new Date()
    const then = new Date(datetime)
    const diff = now.getTime() - then.getTime()

    const seconds = Math.round(diff / 1000)
    const minutes = Math.round(seconds / 60)
    const hours = Math.round(minutes / 60)
    const days = Math.round(hours / 24)
    const months = Math.round(days / 30)
    const years = Math.round(months / 12)

    if (years > 0) {
        return `${years} year${years > 1 ? 's' : ''} ago`
    } else if (months > 0) {
        return `${months} month${months > 1 ? 's' : ''} ago`
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
    } else {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`
    }
}

export const makeGetCall = (url, setState, setLoading) => {
    axios
        .get(url)
        .then((response) => {
            // console.log(response.data)
            setState(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
}
