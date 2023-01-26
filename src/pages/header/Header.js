import { useEffect, useState } from "react"
import { Box, Container, Grid, } from "@mui/material"
import Typed from 'react-typed'
import { motion } from "framer-motion"
// import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

const Header = () => {
  const [move, setMove] = useState(false)

  useEffect(() => {
    if (window.innerWidth > 500) {
      const phrase = 'Andra Aditiya'
      const targetEl = document.getElementById('ndr')
      phrase.split('').map((char, i) => {
        const el = document.createElement('span')

        el.innerText = char
        el.setAttribute('data-index', i.toString())
        el.classList.add('hover-char')
        targetEl.appendChild(el)

        const hoverChars = [...document.getElementsByClassName('hover-char')]

        const removeClass = () => {
          hoverChars.map((char) => {
            char.classList.remove('hovered-ndr')
            char.classList.remove('hovered-ndr-adjacent')
          })
        }

        hoverChars.map((char) => {
          char.addEventListener('mouseover', (e) => {
            removeClass()
            const currentEl = e.target
            const index = parseInt(currentEl.getAttribute('data-index'), 10)

            const prevIndex = index === 0 ? null : index - 1
            const nextIndex = index === phrase.length - 1 ? null : index + 1

            const prevEl = prevIndex !== null && document.querySelector(`[data-index="${prevIndex}"]`)
            const nextEl = nextIndex !== null && document.querySelector(`[data-index="${nextIndex}"]`)

            e.target.classList.add('hovered-ndr')
            prevEl && prevEl.classList.add('hovered-ndr-adjacent')
            nextEl && nextEl.classList.add('hovered-ndr-adjacent')
          })
        })
        document
          .getElementById('ndr')
          .addEventListener('mouseleave', () => {
            removeClass()
          })
      })
    } else {
      document.getElementById('ndr').innerText = 'Andra Aditiya'
    }
  }, [])

  return (
    <>
      <Box mt={2}>
        <Grid container spacing={2} justifyItems="center" alignItems="center">
          <Grid item xs={12} align="center">
            <Container maxWidth="sm">
              <motion.img
                src="./images/picture.jpg"
                className="avatar"
                initial={{ x: 0 }}
                animate={{ x: move ? 100 : 0 }}
                onClick={() => setMove((prev) => !prev)}
              />
              <p className="title-ndr" id="ndr"></p>
              {/* <p> */}
              {/* <span className="title-ndr" id="ndr"></span> */}
              {/* <span>
                  <SimCardDownloadIcon />
                </span> */}
              {/* </p> */}
              <Typed
                loop
                typeSpeed={80}
                className="caption-ndr"
                strings={
                  ['just like to write, either code programming or rhymes']
                }
              />
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Header;