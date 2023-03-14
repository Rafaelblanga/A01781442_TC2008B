/* destroy rigid body objects that collide with this object
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Destroyer : MonoBehaviour
{
    [SerializeField] coinappear rafa;
    // Start is called before the first frame update
    
    void OnCollisionEnter2D(Collision2D col)
    {
       Destroy(col.gameObject);
       rafa.DropCoin();
    }

}
