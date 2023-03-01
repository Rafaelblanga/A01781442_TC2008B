//Move the basket horizontally using the arrow keys or AD to catch the falling balls

//Rafael Blanga Hanono 2023-03-01

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class horizontalmotion : MonoBehaviour
{
    [SerializeField]float speed;
    [SerializeField]float limit;
    [SerializeField]float limity;
    Vector3 move;


    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        move.x = Input.GetAxis("Horizontal");
        move.y = Input.GetAxis("Vertical");

        //limit to a specific range of coordinates
        if (transform.position.x < -limit && move.x < 0)
        {
            move.x = 0;
        }
        else if (transform.position.x > limit && move.x > 0)
        {
            move.x = 0;
        }

        if(transform.position.y < -limity && move.y < 0)
        {
            move.y = 0;
        }
        else if (transform.position.y > limity && move.y > 0)
        {
            move.y = 0;
        }

       /* Debug.Log("X motion: " + move.x);
        Debug.Log("Y motion: " + move.y);*/

        transform.Translate(move * Time.deltaTime * speed);
    }
}
