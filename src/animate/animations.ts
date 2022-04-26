export const fadeInUp = {
    initial: {
        opacity: 0,
        y: 60
    },
    animate: {
        opacity: 1,
        y: 0
    }
}

export const stagger = {
    initial: {

    },
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export const container = {
    hidden: { rotate: 90 },
    show: {
        rotate: 0,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

export const itemA = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 }
};

export const itemB = {
    hidden: { scale: 0, top: 200 },
    show: { scale: 1, top: 80 }
};

export const sidebar = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },

}
export const imagesUp = {
    initial: {
        opacity: 0,
        x: -160,
        scale: 2


    },
    animate: {
        scale: 1,

        opacity: 1,
        x: 0,
        transition: {
            delay: 0.2,
            duration: 0.5
        }
    },
    // transition:{
    //     height: { delay: 0, duration: 0.4 },
    //     opacity: { delay: 0.5, duration: 0.4 }
    // },


}

export const routeAnimation = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 0.1,
            duration: 0.1
        }
    },

    exit: {
        opacity: 0,
        transition: {
            delay: 0.1,
            ease: "easeInOut",
        }
    }
}

